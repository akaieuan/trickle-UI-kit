import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { z } from 'zod';

const PUBLIC_R = join(process.cwd(), 'public', 'r');

const FileSchema = z.object({
  path: z.string(),
  content: z.string(),
  type: z.string(),
  target: z.string().optional()
});

const RegistryItemSchema = z.object({
  $schema: z.string().optional(),
  name: z.string().min(1),
  type: z.string().min(1),
  title: z.string().optional(),
  description: z.string().optional(),
  files: z.array(FileSchema).min(1),
  registryDependencies: z.array(z.string()).optional(),
  cssVars: z
    .object({
      theme: z.record(z.string(), z.string()).optional(),
      light: z.record(z.string(), z.string()).optional(),
      dark: z.record(z.string(), z.string()).optional()
    })
    .optional(),
  css: z.record(z.string(), z.unknown()).optional()
});

async function main() {
  const entries = await readdir(PUBLIC_R);
  const componentJsons = entries.filter((f) => f.endsWith('.json') && f !== 'registry.json');

  if (componentJsons.length === 0) {
    console.error('No registry JSON files found in public/r/. Run `pnpm registry:build` first.');
    process.exit(1);
  }

  let failed = 0;
  for (const file of componentJsons) {
    const raw = await readFile(join(PUBLIC_R, file), 'utf-8');
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch (err) {
      console.error(`✗ ${file} — invalid JSON: ${(err as Error).message}`);
      failed++;
      continue;
    }
    const result = RegistryItemSchema.safeParse(parsed);
    if (!result.success) {
      console.error(`✗ ${file} —`);
      for (const issue of result.error.issues) {
        console.error(`  • ${issue.path.join('.')}: ${issue.message}`);
      }
      failed++;
      continue;
    }
    console.log(`✓ ${result.data.name}`);
  }

  if (failed > 0) {
    console.error(`\n${failed} of ${componentJsons.length} registry items failed validation.`);
    process.exit(1);
  }
  console.log(`\nAll ${componentJsons.length} registry items valid.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
