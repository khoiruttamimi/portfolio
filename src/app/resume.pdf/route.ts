import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const dynamic = 'force-static';

const resumeFilename = 'CV_M_Khoirut_Tamimi.pdf';

export async function GET() {
  const resume = await readFile(join(process.cwd(), 'src', 'data', resumeFilename));

  return new Response(resume, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="${resumeFilename}"`,
    },
  });
}
