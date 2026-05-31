---
// src/pages/dashboard/sites/[id].astro
import Dashboard from '../../../layouts/Dashboard.astro';
const { id } = Astro.params;
---
<Dashboard title="사이트 관리" activeNav="sites">
  <div id="site-loading" class="text-center py-12 text-slate-400">사이트 정보를 불러오는 중...</div>
  <div id="site-content" class="hidden space-y-6">

    <!-- Header -->
    <div class="flex items-start justify-between">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <a href="/dashboard/sites" class="text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">← 내 사이트</a>
        </div>
        <h1 id="site-name-title" class="text-2xl font-bold text-slate-900 dark:text-white"></h1>
        <a id="site-url-link" href="#" target="_blank" class="text-sm text-blue-600 dark:text-blue-400 hover:underline mt-1 block"></a>
      </div>
      <div class="flex items-center gap-3">
        <span id="site-status-badge"></span>
        <button onclick="redeploy()" id="btn-redeploy"
          class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors">
          재배포
        </button>
      </div>
    </div>

    <!-- Info grid -->
    <div class="grid md:grid-cols-2 gap-6">

      <!-- Site info card -->
      <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
        <h2 class="font-semibold text-slate-900 dark:text-white">사이트 정보</h2>
        <div class="space-y-3">
          <div>
            <p class="text-xs text-slate-500 mb-0.5">서브도메인</p>
            <p id="info-subdomain" class="text-sm font-medium text-slate-900 dark:text-white"></p>
          </div>
          <div>
            <p class="text-xs text-slate-500 mb-0.5">Cloudflare Worker URL</p>
            <a id="info-worker-url" href="#" target="_blank" class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline break-all"></a>
          </div>
          <div>
            <p class="text-xs text-slate-500 mb-0.5">GitHub 저장소</p>
            <a id="info-repo-url" href="#" target="_blank" class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline break-all"></a>
          </div>
          <div>
            <p class="text-xs text-slate-500 mb-0.5">WordPress CMS URL</p>
            <a id="info-wp-url" href="#" target="_blank" class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline break-all"></a>
          </div>
          <div>
            <p class="text-xs text-slate-500 mb-0.5">마지막 배포</p>
            <p id="info-last-deploy" class="text-sm font-medium text-slate-900 dark:text-white"></p>
          </div>
        </div>
      </div>

      <!-- Webhook card -->
      <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 space-y-4">
        <h2 class="font-semibold text-slate-900 dark:text-white">Webhook 설정 <span class="text-xs font-normal text-slate-400">(CloudPress 플러그인에 입력)</span></h2>
        <div class="space-y-3">
          <div>
            <p class="text-xs text-slate-500 mb-1">Webhook URL</p>
            <div class="flex items-center gap-2">
              <code id="webhook-url" class="flex-1 text-xs bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded-lg font-mono text-slate-700 dark:text-slate-300 break-all"></code>
              <button onclick="copyText('webhook-url')" class="flex-shrink-0 px-2.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700">복사</button>
            </div>
          </div>
          <div>
            <p class="text-xs text-slate-500 mb-1">Webhook 시크릿</p>
            <div class="flex items-center gap-2">
              <code id="webhook-secret" class="flex-1 text-xs bg-slate-100 dark:bg-slate-700 px-3 py-2 rounded-lg font-mono text-slate-700 dark:text-slate-300 break-all"></code>
              <button onclick="copyText('webhook-secret')" class="flex-shrink-0 px-2.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700">복사</button>
            </div>
          </div>
        </div>
        <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 text-xs text-blue-700 dark:text-blue-400">
          💡 WordPress 관리자 → CloudPress Connector 플러그인 설정에 위 값을 입력하면 글 발행 시 즉시 캐시가 갱신됩니다.
        </div>
      </div>

    </div>

    <!-- Settings card -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
      <h2 class="font-semibold text-slate-900 dark:text-white mb-4">캐시 설정</h2>
      <div class="flex items-center gap-4 flex-wrap">
        <div class="flex items-center gap-2">
          <span class="text-sm text-slate-700 dark:text-slate-300">ISR 활성화</span>
          <button id="isr-toggle" onclick="toggleISR()" class="relative w-11 h-6 rounded-full bg-blue-600 transition-colors">
            <span class="absolute inset-0.5 left-5 w-5 h-5 bg-white rounded-full shadow transition-transform"></span>
          </button>
        </div>
        <div class="flex items-center gap-2">
          <label class="text-sm text-slate-700 dark:text-slate-300">캐시 TTL (초)</label>
          <input id="cache-ttl" type="number" min="10" max="3600" value="60"
            class="w-24 px-2.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
          <button onclick="saveCacheTTL()" class="px-3 py-1.5 rounded-lg bg-slate-200 dark:bg-slate-700 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors">저장</button>
        </div>
      </div>
    </div>

    <!-- Deployments -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 p-6">
      <h2 class="font-semibold text-slate-900 dark:text-white mb-4">최근 배포 기록</h2>
      <div id="deployments-list" class="text-center text-slate-400 text-sm py-4">불러오는 중...</div>
    </div>

    <!-- Danger zone -->
    <div class="bg-white dark:bg-slate-800 rounded-2xl border border-red-200 dark:border-red-900 p-6">
      <h2 class="font-semibold text-red-600 dark:text-red-400 mb-3">위험 구역</h2>
      <p class="text-sm text-slate-500 dark:text-slate-400 mb-4">사이트를 삭제하면 Cloudflare Worker와 GitHub 저장소도 함께 삭제됩니다. 이 작업은 되돌릴 수 없습니다.</p>
      <button onclick="deleteSite()" class="px-4 py-2 rounded-xl border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 text-sm font-medium hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
        사이트 삭제
      </button>
    </div>

  </div>

  <script define:vars={{ siteId: id }}>
    let site: any = null;

    function statusBadge(status: string) {
      const map: Record<string, [string, string]> = {
        active: ['bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400', '운영중'],
        building: ['bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', '빌드중'],
        error: ['bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400', '오류'],
        pending: ['bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-400', '대기'],
        suspended: ['bg-slate-100 text-slate-500', '정지'],
      };
      const [cls, label] = map[status] || map.pending;
      return `<span class="inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${cls}">${label}</span>`;
    }

    function fmt(d: string) {
      if (!d) return '–';
      return new Date(d).toLocaleString('ko-KR');
    }

    async function loadSite() {
      try {
        const res = await fetch(`/api/sites/${siteId}`);
        if (!res.ok) { window.location.href = '/dashboard/sites'; return; }
        const { data } = await res.json();
        site = data;

        document.getElementById('site-loading')!.classList.add('hidden');
        document.getElementById('site-content')!.classList.remove('hidden');

        const url = site.cf_worker_url || `https://${site.subdomain}.cloudpress.io`;
        document.getElementById('site-name-title')!.textContent = site.name;
        (document.getElementById('site-url-link') as HTMLAnchorElement).href = url;
        document.getElementById('site-url-link')!.textContent = url;
        document.getElementById('site-status-badge')!.innerHTML = statusBadge(site.status);

        document.getElementById('info-subdomain')!.textContent = `${site.subdomain}.cloudpress.io`;
        (document.getElementById('info-worker-url') as HTMLAnchorElement).href = site.cf_worker_url || '#';
        document.getElementById('info-worker-url')!.textContent = site.cf_worker_url || '생성 중...';
        (document.getElementById('info-repo-url') as HTMLAnchorElement).href = site.gh_repo_url || '#';
        document.getElementById('info-repo-url')!.textContent = site.gh_repo_full_name || '생성 중...';
        (document.getElementById('info-wp-url') as HTMLAnchorElement).href = site.wp_url ? `${site.wp_url}/wp-admin` : '#';
        document.getElementById('info-wp-url')!.textContent = site.wp_url || '–';
        document.getElementById('info-last-deploy')!.textContent = fmt(site.last_deployed_at);

        const webhookUrl = `${location.origin}/api/webhook/${site.id}`;
        document.getElementById('webhook-url')!.textContent = webhookUrl;
        document.getElementById('webhook-secret')!.textContent = site.webhook_secret || '–';

        // Cache settings
        const ttlInput = document.getElementById('cache-ttl') as HTMLInputElement;
        if (ttlInput) ttlInput.value = String(site.cache_ttl || 60);

        const isrBtn = document.getElementById('isr-toggle');
        if (isrBtn) {
          isrBtn.className = `relative w-11 h-6 rounded-full transition-colors ${site.isr_enabled ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-600'}`;
        }

        loadDeployments();
      } catch {
        window.location.href = '/dashboard/sites';
      }
    }

    async function loadDeployments() {
      const el = document.getElementById('deployments-list')!;
      try {
        const res = await fetch(`/api/deployments?site_id=${siteId}&limit=10`);
        const { data: deps = [] } = await res.json();
        if (!deps.length) { el.textContent = '배포 기록이 없습니다.'; return; }
        const statusMap: Record<string, string> = {
          success: '✅', error: '❌', pending: '⏳', running: '🔄'
        };
        el.innerHTML = `<div class="space-y-2">
          ${deps.map((d: any) => `
            <div class="flex items-start gap-3 text-sm py-2 border-b border-slate-100 dark:border-slate-700 last:border-0">
              <span class="flex-shrink-0 text-base">${statusMap[d.status] || '–'}</span>
              <div class="flex-1 min-w-0">
                <div class="flex items-center gap-2">
                  <span class="font-medium text-slate-900 dark:text-white capitalize">${d.trigger_type}</span>
                  <span class="text-xs text-slate-400">${fmt(d.triggered_at)}</span>
                </div>
                ${d.log ? `<pre class="text-xs text-slate-500 dark:text-slate-400 mt-1 whitespace-pre-wrap">${d.log.slice(0, 200)}</pre>` : ''}
              </div>
            </div>
          `).join('')}
        </div>`;
      } catch {
        el.textContent = '배포 기록을 불러오는 데 실패했습니다.';
      }
    }

    async function redeploy() {
      if (!confirm('재배포를 시작하시겠습니까?')) return;
      const btn = document.getElementById('btn-redeploy') as HTMLButtonElement;
      btn.disabled = true;
      btn.textContent = '재배포 중...';
      try {
        const res = await fetch(`/api/sites/${siteId}/redeploy`, { method: 'POST' });
        const data = await res.json();
        if (data.success) { alert('재배포가 시작되었습니다!'); setTimeout(loadSite, 2000); }
        else alert(data.error || '재배포에 실패했습니다.');
      } catch { alert('네트워크 오류가 발생했습니다.'); }
      finally { btn.disabled = false; btn.textContent = '재배포'; }
    }
    (window as any).redeploy = redeploy;

    async function toggleISR() {
      const current = site?.isr_enabled;
      const res = await fetch(`/api/sites/${siteId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isr_enabled: current ? 0 : 1 }),
      });
      const data = await res.json();
      if (data.success) { site = data.data; loadSite(); }
    }
    (window as any).toggleISR = toggleISR;

    async function saveCacheTTL() {
      const ttl = parseInt((document.getElementById('cache-ttl') as HTMLInputElement).value);
      if (isNaN(ttl) || ttl < 10) { alert('캐시 TTL은 최소 10초입니다.'); return; }
      const res = await fetch(`/api/sites/${siteId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ cache_ttl: ttl }),
      });
      const data = await res.json();
      if (data.success) alert('설정이 저장되었습니다.');
      else alert(data.error || '저장에 실패했습니다.');
    }
    (window as any).saveCacheTTL = saveCacheTTL;

    async function deleteSite() {
      if (!confirm(`"${site?.name}" 사이트를 삭제하시겠습니까?\n\n이 작업은 되돌릴 수 없습니다.`)) return;
      const res = await fetch(`/api/sites/${siteId}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) { alert('사이트가 삭제되었습니다.'); window.location.href = '/dashboard/sites'; }
      else alert(data.error || '삭제에 실패했습니다.');
    }
    (window as any).deleteSite = deleteSite;

    function copyText(id: string) {
      const el = document.getElementById(id);
      if (!el) return;
      navigator.clipboard.writeText(el.textContent || '');
      const orig = el.nextElementSibling?.textContent;
      if (el.nextElementSibling) {
        el.nextElementSibling.textContent = '복사됨!';
        setTimeout(() => { if (el.nextElementSibling) el.nextElementSibling.textContent = orig || '복사'; }, 1500);
      }
    }
    (window as any).copyText = copyText;

    loadSite();
  </script>
</Dashboard>
