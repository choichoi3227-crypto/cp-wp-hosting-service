// src/pages/api/debug.ts
// 임시 진단용 엔드포인트 - 문제 해결 후 반드시 삭제할 것
import type { APIRoute } from 'astro';
import type { Env } from '../../types/index.ts';

export const GET: APIRoute = async ({ locals }) => {
  const runtime = (locals as { runtime?: { env: Env } }).runtime;
  const env = runtime?.env;

  const checks = {
    runtime_exists: !!runtime,
    env_exists: !!env,
    DB_bound: !!(env as any)?.DB,
    KV_bound: !!(env as any)?.KV,
    JWT_SECRET_set: !!(env as any)?.JWT_SECRET,
    ENCRYPTION_KEY_set: !!(env as any)?.ENCRYPTION_KEY,
    locals_env_exists: !!(locals as any).env,
    env_keys: env ? Object.keys(env as any).filter(k => k !== 'ASSETS') : [],
  };

  // DB 연결 테스트
  let db_test: string;
  try {
    const db = (env as any)?.DB as D1Database;
    if (!db) {
      db_test = 'DB binding missing';
    } else {
      await db.prepare('SELECT 1').run();
      db_test = 'OK';
    }
  } catch (e) {
    db_test = e instanceof Error ? e.message : String(e);
  }

  return Response.json({ checks, db_test }, { status: 200 });
};
