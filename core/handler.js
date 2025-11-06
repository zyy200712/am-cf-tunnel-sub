/**
 * YouTube  : https://youtube.com/@am_clubs
 * Telegram : https://t.me/am_clubs
 * GitHub   : https://github.com/amclubs
 * BLog     : https://amclubss.com
 */

let id = base64Decode('ZWM4NzJkOGYtNzJiMC00YTA0LWI2MTItMDMyN2Q4NWUxOGVk');
let uuid;
let host;

let paddr;

let s5 = '';
let socks5Enable = false;
let parsedSocks5 = {};

let ipLocal = [
    'wto.org:443#youtube.com/@am_clubs 数字套利(视频教程)',
    'icook.hk#t.me/am_clubs TG群(加入解锁更多节点)',
    'time.is#github.com/amclubs GitHub仓库(关注查看新功能)',
    '127.0.0.1:1234#amclubss.com 博客教程(cfnat)'
];

const defaultIpUrlTxt = base64Decode('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FtY2x1YnMvYW0tY2YtdHVubmVsL21haW4vaXB2NC50eHQ=');
let randomNum = 25;
let ipUrl = [];
let ipUrlTxt = [defaultIpUrlTxt];
let ipUrlCsv = [];
let noTLS = false;
let sl = 5;

let fakeUserId;
let fakeHostName;

let isBase64 = true;
let subConfig = base64Decode('aHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2FtY2x1YnMvQUNMNFNTUi9tYWluL0NsYXNoL2NvbmZpZy9BQ0w0U1NSX09ubGluZV9GdWxsX011bHRpTW9kZS5pbmk=');
let subConverter = base64Decode('dXJsLnYxLm1r');
let subProtocol = 'https';

let subUpdateTime = 6;
let timestamp = 4102329600000;
let total = 99 * 1125899906842624;
let download = Math.floor(Math.random() * 1099511627776);
let upload = download;
let expire = Math.floor(timestamp / 1000);

let nat64 = true;
let nat64Prefix;
let nat64Prefixs = [
    '2602:fc59:b0:64::'
];

const protTypeBase64 = 'ZG14bGMzTT0=';
const protTypeBase64Tro = 'ZEhKdmFtRnU=';
const httpPattern = /^http(s)?:\/\/.+/;
let network = 'ws';
let projectName = base64Decode('YW1jbHVicw==');
let fileName = '5pWw5a2X5aWX5Yip';
let ytName = base64Decode('aHR0cHM6Ly95b3V0dWJlLmNvbS9AYW1fY2x1YnM/c3ViX2NvbmZpcm1hdGlvbj0x');
let tgName = base64Decode('aHR0cHM6Ly90Lm1lL2FtX2NsdWJz');
let ghName = base64Decode('aHR0cHM6Ly9naXRodWIuY29tL2FtY2x1YnMvYW0tY2YtdHVubmVs');
let bName = base64Decode('aHR0cHM6Ly9hbWNsdWJzcy5jb20=');
let pName = '5pWw5a2X5aWX5Yip';
let hostRemark = false;
let enableLog = false;

// ======= 主逻辑函数（共用） =======
export async function mainHandler({ req, url, headers, res, env }) {
    const { ENABLE_LOG, ID, UUID, HOST, SOCKS5, IP_URL, PROXYIP, NAT64, NAT64_PREFIX, HOST_REMARK, PROT_TYPE, RANDOW_NUM, SUB_CONFIG, SUB_CONVERTER,NO_TLS } = env || {};

    const rawHost = headers.get('host') || headers.get('Host') || 'localhost';
    const userAgent = headers.get('User-Agent') || '';
    log(`[mainHandler]-->rawHost: ${rawHost}`);
    enableLog = url.searchParams.get('ENABLE_LOG') || getEnvVar('ENABLE_LOG', env) || enableLog;
    noTLS = url.searchParams.get('NO_TLS') || getEnvVar('NO_TLS', env) || noTLS;

    id = getEnvVar('ID', env) || ID || id;
    uuid = url.searchParams.get('UUID') || getEnvVar('UUID', env) || UUID;
    host = url.searchParams.get('HOST') || getEnvVar('HOST', env) || HOST;
    log(`[mainHandler]-->id: ${id} uuid: ${uuid} host: ${host}`);

    s5 = url.searchParams.get('SOCKS5') || getEnvVar('SOCKS5', env) || SOCKS5 || s5;
    parsedSocks5 = await parseSocks5FromUrl(s5, url);
    if (parsedSocks5) socks5Enable = true;

    let ip_url = url.searchParams.get('IP_URL') || getEnvVar('IP_URL', env) || IP_URL;
    if (ip_url) {
        const result = await parseIpUrl(ip_url);
        ipUrlCsv = result.ipUrlCsvResult;
        ipUrlTxt = result.ipUrlTxtResult;
    }

    const proxyIPUrl = url.searchParams.get('PROXYIP') || getEnvVar('PROXYIP', env) || PROXYIP;
    if (proxyIPUrl) {
        if (httpPattern.test(proxyIPUrl)) {
            const proxyIpTxt = await addIpText(proxyIPUrl);
            let ipUrlTxtAndCsv;
            if (proxyIPUrl.endsWith('.csv')) {
                ipUrlTxtAndCsv = await getIpUrlTxtAndCsv(noTLS, null, proxyIpTxt);
            } else {
                ipUrlTxtAndCsv = await getIpUrlTxtAndCsv(noTLS, proxyIpTxt, null);
            }
            const uniqueIpTxt = [...new Set([...ipUrlTxtAndCsv.txt, ...ipUrlTxtAndCsv.csv])];
            paddr = uniqueIpTxt[Math.floor(Math.random() * uniqueIpTxt.length)];
        } else {
            const proxyIPs = await addIpText(proxyIPUrl);
            paddr = proxyIPs[Math.floor(Math.random() * proxyIPs.length)];
        }
    }

    nat64 = url.searchParams.get('NAT64') || getEnvVar('NAT64', env) || NAT64 || nat64;
    const nat64PrefixUrl = url.searchParams.get('NAT64_PREFIX') || getEnvVar('NAT64_PREFIX', env) || NAT64_PREFIX;
    if (nat64PrefixUrl) {
        if (httpPattern.test(nat64PrefixUrl)) {
            const proxyIpTxt = await addIpText(nat64PrefixUrl);
            let ipUrlTxtAndCsv;
            if (nat64PrefixUrl.endsWith('.csv')) {
                ipUrlTxtAndCsv = await getIpUrlTxtAndCsv(noTLS, null, proxyIpTxt);
            } else {
                ipUrlTxtAndCsv = await getIpUrlTxtAndCsv(noTLS, proxyIpTxt, null);
            }
            const uniqueIpTxt = [...new Set([...ipUrlTxtAndCsv.txt, ...ipUrlTxtAndCsv.csv])];
            nat64Prefix = uniqueIpTxt[Math.floor(Math.random() * uniqueIpTxt.length)];
        } else {
            nat64Prefixs = await addIpText(nat64PrefixUrl);
            nat64Prefix = nat64Prefixs[Math.floor(Math.random() * nat64Prefixs.length)];
        }
    }

    hostRemark = url.searchParams.get('HOST_REMARK') || getEnvVar('HOST_REMARK', env) || HOST_REMARK || hostRemark;
    let protType = url.searchParams.get('PROT_TYPE') || getEnvVar('PROT_TYPE', env) || PROT_TYPE;
    if (protType) protType = protType.toLowerCase();
    randomNum = url.searchParams.get('RANDOW_NUM') || getEnvVar('RANDOW_NUM', env) || RANDOW_NUM || randomNum;
    log(`[handler]-->randomNum: ${randomNum}`);

    subConfig = getEnvVar('SUB_CONFIG', env) || SUB_CONFIG || subConfig;
    subConverter = getEnvVar('SUB_CONVERTER', env) || SUB_CONVERTER || subConverter;
    let subProtocol, subConverterWithoutProtocol;
    if (subConverter.startsWith("http://") || subConverter.startsWith("https://")) {
        [subProtocol, subConverterWithoutProtocol] = subConverter.split("://");
    } else {
        [subProtocol, subConverterWithoutProtocol] = [undefined, subConverter];
    }
    subConverter = subConverterWithoutProtocol;

    fakeUserId = await getFakeUserId(uuid);
    fakeHostName = getFakeHostName(rawHost,noTLS);
    log(`[handler]-->fakeUserId: ${fakeUserId}`);

    // ---------------- 路由 ----------------
    if (url.pathname === "/login") {
        const result = await login(req, env, res);
        return result;
    }
    if (url.pathname === `/${id}/setting`) {
        const html = await getSettingHtml(rawHost);
        return sendResponse(html, userAgent, res);
    }
    if (url.pathname === `/${id}`) {
        const html = await getConfig(rawHost, uuid, host, paddr, parsedSocks5, userAgent, url, protType, nat64, hostRemark);
        return sendResponse(html, userAgent, res);
    }
    if (url.pathname === `/${fakeUserId}`) {
        const html = await getConfig(rawHost, uuid, host, paddr, parsedSocks5, 'CF-FAKE-UA', url, protType, nat64, hostRemark);
        return sendResponse(html, 'CF-FAKE-UA', res);
    }
    return login(req, env, res);
}

/** --------------------- main ------------------------------ */
function getEnvVar(key, env) {
    if (env && typeof env[key] !== 'undefined') {
        return env[key];
    }
    if (typeof process !== 'undefined' && process.env && typeof process.env[key] !== 'undefined') {
        return process.env[key];
    }
    return undefined;
}

/** ---------------------Tools------------------------------ */
function log(...args) {
    if (!enableLog) {
        return;
    }
    let prefix = '';
    try {
        // ✅ 判断 Cloudflare Worker 环境
        if (typeof WebSocketPair !== 'undefined' && typeof addEventListener === 'function' && typeof caches !== 'undefined') {
            prefix = '[CF]';
        }
        // ✅ 判断 Vercel / Node 环境
        else if (typeof process !== 'undefined' && process.release?.name === 'node') {
            prefix = '[VC]';
        }
        // ✅ 其他未知环境
        else {
            prefix = '[SYS]';
        }
    } catch (e) {
        prefix = '[LOG]';
    }
    const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
    console.log(`${prefix} ${timestamp} →`, ...args);
}

function errorLogs(err, extra = {}) {
    let prefix = '';
    try {
        // 判断 Cloudflare Worker 环境
        if (typeof WebSocketPair !== 'undefined' && typeof addEventListener === 'function' && typeof caches !== 'undefined') {
            prefix = '[CF-ERR]';
        }
        // 判断 Vercel / Node.js 环境
        else if (typeof process !== 'undefined' && process.release?.name === 'node') {
            prefix = '[VC-ERR]';
        }
        else {
            prefix = '[SYS-ERR]';
        }
    } catch {
        prefix = '[ERR]';
    }

    const timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
    if (err instanceof Error) {
        console.error(`${prefix} ${timestamp} →`, err.message, '\nStack:', err.stack, extra);
    } else {
        console.error(`${prefix} ${timestamp} →`, err, extra);
    }
}

function getHeader(req, name) {
    try {
        if (!req || !req.headers) return '';
        // Edge Headers 
        if (typeof req.headers.get === 'function') {
            const v = req.headers.get(name);
            return (v === undefined || v === null) ? '' : String(v);
        }
        // Node.js headers 
        const v2 = req.headers[name.toLowerCase()];
        return (v2 === undefined || v2 === null) ? '' : String(v2);
    } catch (e) {
        errorLogs('getHeader error:', e);
        return '';
    }
}

function sendResponse(content, userAgent = '', res = null, status = 200) {
    if (!status || typeof status !== 'number') status = 200;

    const isMozilla = userAgent.toLowerCase().includes('mozilla');
    const headers = {
        "Content-Type": isMozilla ? "text/html;charset=utf-8" : "text/plain;charset=utf-8",
        "Profile-Update-Interval": `${subUpdateTime}`,
        "Subscription-Userinfo": `upload=${upload}; download=${download}; total=${total}; expire=${expire}`,
    };

    if (!isMozilla) {
        const fileNameAscii = encodeURIComponent(decodeBase64Utf8(fileName));
        headers["Content-Disposition"] = `attachment; filename=${fileNameAscii}; filename*=gbk''${fileNameAscii}`;
    }

    // Node / Vercel Serverless
    if (res) {
        Object.entries(headers).forEach(([k, v]) => res.setHeader(k, v));
        if (typeof res.status === 'function') return res.status(status).send(content);
        if (typeof res.writeHead === 'function') {
            res.writeHead(status, headers);
            res.end(content);
            return;
        }
    }

    // Edge / CF Worker / Vercel Edge
    if (typeof Response !== 'undefined') {
        return new Response(content, { status, headers });
    }

    return content;
}

function base64Encode(input) {
    try {
        return Buffer.from(input, 'utf-8').toString('base64');
    } catch (e) {
        if (typeof btoa === 'function') {
            const utf8 = new TextEncoder().encode(input);
            let binary = '';
            utf8.forEach(b => binary += String.fromCharCode(b));
            return btoa(binary);
        } else {
            throw new Error('Base64 encode not supported in this environment');
        }
    }
}

function base64Decode(input) {
    if (typeof atob === 'function') {
        // Edge Runtime 
        return atob(input);
    } else if (typeof Buffer === 'function') {
        // Node.js
        return Buffer.from(input, 'base64').toString('utf-8');
    } else {
        throw new Error('Base64 decode not supported in this environment');
    }
}

function doubleBase64Decode(input) {
    const first = base64Decode(input);
    return base64Decode(first);
}

function getFileType(url) {
    const baseUrl = url.split('@')[0];
    const extension = baseUrl.match(/\.(csv|txt)$/i);
    if (extension) {
        return extension[1].toLowerCase();
    } else {
        return 'txt';
    }
}

async function addIpText(envAdd) {
    var addText = envAdd.replace(/[	|"'\r\n]+/g, ',').replace(/,+/g, ',');
    //log(addText);
    if (addText.charAt(0) == ',') {
        addText = addText.slice(1);
    }
    if (addText.charAt(addText.length - 1) == ',') {
        addText = addText.slice(0, addText.length - 1);
    }
    const add = addText.split(',');
    // log(add);
    return add;
}

function socks5Parser(socks5) {
    let [latter, former] = socks5.split("@").reverse();
    let username, password, hostname, port;

    if (former) {
        const formers = former.split(":");
        if (formers.length !== 2) {
            throw new Error('Invalid SOCKS address format: authentication must be in the "username:password" format');
        }
        [username, password] = formers;
    }

    const latters = latter.split(":");
    port = Number(latters.pop());
    if (isNaN(port)) {
        throw new Error('Invalid SOCKS address format: port must be a number');
    }

    hostname = latters.join(":");
    const isIPv6 = hostname.includes(":") && !/^\[.*\]$/.test(hostname);
    if (isIPv6) {
        throw new Error('Invalid SOCKS address format: IPv6 addresses must be enclosed in brackets, e.g., [2001:db8::1]');
    }

    //log(`socks5Parser-->: username ${username} \n password: ${password} \n hostname: ${hostname} \n port: ${port}`);
    return { username, password, hostname, port };
}

async function parseSocks5FromUrl(socks5, url) {
    if (/\/socks5?=/.test(url.pathname)) {
        socks5 = url.pathname.split('5=')[1];
    } else if (/\/socks[5]?:\/\//.test(url.pathname)) {
        socks5 = url.pathname.split('://')[1].split('#')[0];
    }

    const authIdx = socks5.indexOf('@');
    if (authIdx !== -1) {
        let userPassword = socks5.substring(0, authIdx);
        const base64Regex = /^(?:[A-Z0-9+/]{4})*(?:[A-Z0-9+/]{2}==|[A-Z0-9+/]{3}=)?$/i;
        if (base64Regex.test(userPassword) && !userPassword.includes(':')) {
            userPassword = atob(userPassword);
        }
        socks5 = `${userPassword}@${socks5.substring(authIdx + 1)}`;
    }

    if (socks5) {
        try {
            return socks5Parser(socks5);
        } catch (err) {
            log(err.toString());
            return null;
        }
    }
    return null;
}

function getRandomItems(arr, count) {
    if (!Array.isArray(arr)) return [];

    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

async function getFakeUserId(userId) {
    const date = new Date().toISOString().split('T')[0];
    const rawString = `${userId}-${date}`;

    const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(rawString));
    const hashArray = Array.from(new Uint8Array(hashBuffer)).map(b => ('00' + b.toString(16)).slice(-2)).join('');

    return `${hashArray.substring(0, 8)}-${hashArray.substring(8, 12)}-${hashArray.substring(12, 16)}-${hashArray.substring(16, 20)}-${hashArray.substring(20, 32)}`;
}

function getFakeHostName(host,noTLS) {
    if (host.includes(".pages.dev")) {
        return `${fakeHostName}.pages.dev`;
    } else if (host.includes(".workers.dev") || host.includes("notls") || noTLS === 'true') {
        return `${fakeHostName}.workers.dev`;
    }
    return `${fakeHostName}.xyz`;
}

function revertFakeInfo(content, userId, hostName) {
    log(`revertFakeInfo-->: isBase64 ${isBase64} \n content: ${content}`);
    if (isBase64) {
        content = base64Decode(content);
    }
    content = content.replace(new RegExp(fakeUserId, 'g'), userId).replace(new RegExp(fakeHostName, 'g'), hostName);
    if (isBase64) {
        content = base64Encode(content);
    }
    return content;
}

function decodeBase64Utf8(str) {
    const bytes = Uint8Array.from(atob(str), c => c.charCodeAt(0));
    return new TextDecoder('utf-8').decode(bytes);
}

function xEn(plain, key) {
    const encoder = new TextEncoder();
    const p = encoder.encode(plain);
    const k = encoder.encode(key);
    const out = new Uint8Array(p.length);
    for (let i = 0; i < p.length; i++) {
        out[i] = p[i] ^ k[i % k.length];
    }
    return btoa(String.fromCharCode(...out));
}

function xDe(b64, key) {
    const data = Uint8Array.from(atob(b64), c => c.charCodeAt(0));
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const k = encoder.encode(key);
    const out = new Uint8Array(data.length);
    for (let i = 0; i < data.length; i++) {
        out[i] = data[i] ^ k[i % k.length];
    }
    return decoder.decode(out);
}

async function parseIpUrl(ip_url) {
    const newCsvUrls = [];
    const newTxtUrls = [];
    try {
        const response = await fetch(ip_url);
        const text = await response.text();
        const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
        const hasHttpLinks = lines.some(line => /^https?:\/\//i.test(line));
        if (hasHttpLinks) {
            lines.forEach(u => {
                if (/^https?:\/\//i.test(u)) {
                    if (getFileType(u) === 'csv') {
                        newCsvUrls.push(u);
                    } else {
                        newTxtUrls.push(u);
                    }
                }
            });
        } else {
            if (getFileType(ip_url) === 'csv') {
                newCsvUrls.push(ip_url);
            } else {
                newTxtUrls.push(ip_url);
            }
        }
        const ipUrlCsvResult = [...new Set(newCsvUrls)];
        const ipUrlTxtResult = [...new Set(newTxtUrls)];
        return { ipUrlCsvResult, ipUrlTxtResult };
    } catch (err) {
        errorLogs('获取 IP_URL 文件内容失败：', err);
        return { ipUrlCsvResult: [], ipUrlTxtResult: [] };
    }
}

/** ---------------------Get data------------------------------ */
let subParams = ['sub', 'base64', 'b64', 'clash', 'singbox', 'sb'];
let portSet_http = new Set([80, 8080, 8880, 2052, 2086, 2095, 2082]);
let portSet_https = new Set([443, 8443, 2053, 2096, 2087, 2083]);

async function getConfig(rawHost, userId, host, proxyIP, parsedSocks5, userAgent, _url, protType, nat64, hostRemark) {
    log(`------------getConfig------------------`);
    log(`userId: ${userId} \n host: ${host} \n proxyIP: ${proxyIP} \n userAgent: ${userAgent} \n _url: ${_url} \n protType: ${protType} \n nat64: ${nat64} \n hostRemark: ${hostRemark} `);

    userAgent = userAgent.toLowerCase();
    let port = 443;
    if (host.includes('.workers.dev')) {
        port = 80;
    }

    if (userAgent.includes('mozilla') && !subParams.some(param => _url.searchParams.has(param))) {
        if (!protType) {
            protType = doubleBase64Decode(protTypeBase64);
        }
        const [v2, clash] = getConfigLink(userId, host, host, port, host, proxyIP, protType, nat64);
        return getHtmlRes(rawHost, proxyIP, socks5Enable, parsedSocks5, host, v2, clash);
    }

    let num = randomNum || 25;
    if (protType && !randomNum) {
        num = num * 2;
    }

    const ipUrlTxtAndCsv = await getIpUrlTxtAndCsv(noTLS, ipUrlTxt, ipUrlCsv, num);

    log(`txt: ${ipUrlTxtAndCsv.txt} \n csv: ${ipUrlTxtAndCsv.csv}`);
    let content = await getConfigContent(rawHost, userAgent, _url, host, fakeHostName, fakeUserId, noTLS, ipUrlTxtAndCsv.txt, ipUrlTxtAndCsv.csv, protType, nat64, hostRemark);

    return _url.pathname === `/${fakeUserId}` ? content : revertFakeInfo(content, userId, host);
}

function getHtmlRes(rawHost, proxyIP, socks5Enable, parsedSocks5, host, v2, clash) {
    const subRemark = `IP_LOCAL/IP_URL`;
    let proxyIPRemark = `PROXYIP: ${proxyIP}`;
    if (socks5Enable) {
        proxyIPRemark = `socks5: ${parsedSocks5.hostname}:${parsedSocks5.port}`;
    }
    let remark = `您的订阅节点由设置变量 ${subRemark} 提供, 当前使用反代是${proxyIPRemark}`;
    if (!proxyIP && !socks5Enable) {
        remark = `您的订阅节点由设置变量 ${subRemark} 提供, 当前没设置反代, 推荐您设置PROXYIP变量或SOCKS5变量或订阅连接带proxyIP`;
    }
    return getConfigHtml(rawHost, remark, v2, clash);
}

function getConfigLink(uuid, host, address, port, remarks, proxyip, protType, nat64) {
    const ep = 'none';
    let pathParm = `&PROT_TYPE=${protType}`;
    if (proxyip) {
        pathParm = pathParm + `&PADDR=${proxyip}`;
    }
    if (nat64) {
        pathParm = pathParm + `&P64=${nat64}`;
    }
    if (nat64Prefix) {
        pathParm = pathParm + `&P64PREFIX=${nat64Prefix}`;
    }
    if (s5) {
        pathParm = pathParm + `&S5=${s5}`;
    }
    let path = `/?ed=2560` + pathParm;
    const fp = 'randomized';
    let tls = ['tls', true];
    if (host.includes('.workers.dev') || host.includes('pages.dev')) {
        path = `/${host}${path}`;
        remarks += ' 请用绑定自定义域名访问再订阅！';
    }

    const v2 = getv2LinkConfig({ protType, host, uuid, address, port, remarks, ep, path, fp, tls });
    const clash = getCLinkConfig(protType, host, address, port, uuid, path, tls, fp);
    return [v2, clash];
}

function getv2LinkConfig({ protType, host, uuid, address, port, remarks, ep, path, fp, tls }) {
    log(`------------getv2LinkConfig------------------`);
    log(`protType: ${protType} \n host: ${host} \n uuid: ${uuid} \n address: ${address} \n port: ${port} \n remarks: ${remarks} \n ep: ${ep} \n path: ${path} \n fp: ${fp} \n tls: ${tls} `);

    let sAndp = `&sni=${host}&fp=${fp}`;
    if (portSet_http.has(parseInt(port))) {
        tls = ['', false];
        sAndp = '';
    }
    const k = 'id';
    const t = xEn(protType, k);
    const u = xEn(uuid, k);
    const a = xEn(address, k);
    const p = xEn(port, k);

    const v2 = `${xDe(t, k)}://${xDe(u, k)}@${xDe(a, k)}:${xDe(p, k)}\u003f\u0065\u006e\u0063\u0072\u0079` + 'p' + `${atob('dGlvbj0=')}${ep}\u0026\u0073\u0065\u0063\u0075\u0072\u0069\u0074\u0079\u003d${tls[0]}&type=${network}&host=${host}&path=${encodeURIComponent(path)}${sAndp}#${encodeURIComponent(remarks)}`;
    return v2;
}

function getCLinkConfig(protType, host, address, port, uuid, path, tls, fp) {
    log(`------------getCLinkConfig------------------`);
    log(`protType: ${protType} \n host: ${host} \n address: ${address} \n port: ${port} \n uuid: ${uuid} \n path: ${path} \n tls: ${tls} \n fp: ${fp} `);
    const k = 'idc';
    const t = xEn(protType, k);
    const u = xEn(uuid, k);
    const a = xEn(address, k);
    const p = xEn(port, k);
    return `- {type: ${xDe(t, k)}, name: ${host}, server: ${xDe(a, k)}, port: ${xDe(p, k)}, password: ${xDe(u, k)}, network: ${network}, tls: ${tls[1]}, udp: false, sni: ${host}, client-fingerprint: ${fp}, skip-cert-verify: true,  ws-opts: {path: ${path}, headers: {Host: ${host}}}}`;
}

async function getConfigContent(rawHost, userAgent, _url, host, fakeHostName, fakeUserId, noTLS, ipUrlTxt, ipUrlCsv, protType, nat64, hostRemark) {
    log(`------------getConfigContent------------------`);
    const uniqueIpTxt = [...new Set([...ipUrlTxt, ...ipUrlCsv])];
    let responseBody;
    log(`[getConfigContent]---> protType: ${protType}`);
    if (!protType) {
        protType = doubleBase64Decode(protTypeBase64);
        const responseBody1 = splitNodeData(uniqueIpTxt, noTLS, fakeHostName, fakeUserId, userAgent, protType, nat64, hostRemark);
        const responseBodyTop = splitNodeData(ipLocal, noTLS, fakeHostName, fakeUserId, userAgent, protType, nat64, hostRemark);
        protType = doubleBase64Decode(protTypeBase64Tro);
        const responseBody2 = splitNodeData(uniqueIpTxt, noTLS, fakeHostName, fakeUserId, userAgent, protType, nat64, hostRemark);
        responseBody = [responseBodyTop,responseBody1, responseBody2].join('\n');
    } else {
        const responseBodyTop = splitNodeData(ipLocal, noTLS, fakeHostName, fakeUserId, userAgent, protType, nat64, hostRemark);
        responseBody = splitNodeData(uniqueIpTxt, noTLS, fakeHostName, fakeUserId, userAgent, protType, nat64, hostRemark);
        responseBody = [responseBodyTop,responseBody].join('\n');
    }
    responseBody = base64Encode(responseBody);

    if (!userAgent.includes(('CF-FAKE-UA').toLowerCase())) {
        const safeHost = (rawHost || '').replace(/^https?:\/\//, '');
        let url = `https://${safeHost}/${fakeUserId}`;
        log(`[getConfigContent]---> url: ${url}`);

        if (isClashCondition(userAgent, _url)) {
            isBase64 = false;
            url = createSubConverterUrl('clash', url, subConfig, subConverter, subProtocol);
        } else if (isSingboxCondition(userAgent, _url)) {
            isBase64 = false;
            url = createSubConverterUrl('singbox', url, subConfig, subConverter, subProtocol);
        } else {
            return responseBody;
        }
        try {
            const finalUrl = new URL(url).toString();
            log(`[getConfigContent] Fetching from: ${finalUrl}`);
            const response = await fetch(finalUrl, {
                headers: {
                    'User-Agent': `${userAgent} ${projectName}`
                }
            });
            responseBody = await response.text();
        } catch (err) {
            errorLogs(`[getConfigContent][fetch error] ${err.message}`);
        }
    }

    return responseBody;
}

function createSubConverterUrl(target, url, subConfig, subConverter, subProtocol) {
    return `${subProtocol}://${subConverter}/sub?target=${target}&url=${encodeURIComponent(url)}&insert=false&config=${encodeURIComponent(subConfig)}&emoji=true&list=false&tfo=false&scv=true&fdn=false&sort=false&new_name=true`;
}

function isClashCondition(userAgent, _url) {
    return (userAgent.includes('clash') && !userAgent.includes('nekobox')) || (_url.searchParams.has('clash') && !userAgent.includes('subConverter'));
}

function isSingboxCondition(userAgent, _url) {
    return userAgent.includes('sing-box') || userAgent.includes('singbox') || ((_url.searchParams.has('singbox') || _url.searchParams.has('sb')) && !userAgent.includes('subConverter'));
}

function splitNodeData(uniqueIpTxt, noTLS, host, uuid, userAgent, protType, nat64, hostRemark) {
    log(`splitNodeData----> \n host: ${host} \n uuid: ${uuid} \n protType: ${protType} \n hostRemark: ${hostRemark}`);
    const isHostRemark = (hostRemark === true || hostRemark === 'true');

    const regionMap = {
        'SG': '🇸🇬 SG',
        'HK': '🇭🇰 HK',
        'KR': '🇰🇷 KR',
        'JP': '🇯🇵 JP',
        'GB': '🇬🇧 GB',
        'US': '🇺🇸 US',
        'TW': '🇼🇸 TW',
        'CF': '📶 CF'
    };
    function isLikelyHost(str) {
        if (!str) return false;
        str = str.trim();
        if (/\s|\/|\\|\(|\)|[\u4e00-\u9fff]/.test(str)) return false;
        if (/^(\d{1,3}\.){3}\d{1,3}(:\d+)?$/.test(str)) return true;
        if (/^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(:\d+)?$/.test(str)) return true;
        return false;
    }

    const responseBody = uniqueIpTxt.map(raw => {
        const ipTxt = String(raw).trim();
        log(`splitNodeData---> ipTxt: ${ipTxt}`);
        let proxyip = "";
        let port = "443";
        let remarks = "";
        let address = "";

        const lastAt = ipTxt.lastIndexOf('@');
        let main = ipTxt;
        if (lastAt !== -1) {
            const candidate = ipTxt.slice(lastAt + 1).trim();
            if (isLikelyHost(candidate)) {
                proxyip = candidate;
                main = ipTxt.slice(0, lastAt);
                log(`splitNodeData--detected-proxy--> proxyip: ${proxyip}  main: ${main}`);
            } else {
                log(`splitNodeData--at-in-remark--> ignored candidate after @: ${candidate}`);
            }
        }

        const mainMatch = main.match(/^(\[.*\]|[^:#\s]+)(?::(\d+))?(?:#(.*))?$/);
        if (mainMatch) {
            address = mainMatch[1];
            port = mainMatch[2] || port;
            remarks = mainMatch[3] || "";
        } else {
            address = main;
            remarks = "";
        }

        if (isHostRemark) {
            remarks = host;
        } else {
            remarks = (remarks && remarks.trim()) ? remarks.trim() : address;
        }

        const rmKey = String(remarks).trim().toUpperCase();
        if (regionMap[rmKey]) {
            remarks = regionMap[rmKey];
        }

        proxyip = proxyip || paddr;
        log(`splitNodeData--final--> \n address: ${address} \n port: ${port} \n remarks: ${remarks} \n proxyip: ${proxyip}`);

        if (noTLS !== 'true' && portSet_http.has(parseInt(port))) {
            return null;
        }

        const [v2, clash] = getConfigLink(uuid, host, address, port, remarks, proxyip, protType, nat64);
        return v2;
    }).filter(Boolean).join('\n');

    return responseBody;
}

async function getIpUrlTxtAndCsv(noTLS, urlTxts, urlCsvs, num) {
    if (noTLS === 'true') {
        return {
            txt: await getIpUrlTxt(urlTxts, num),
            csv: await getIpUrlCsv(urlCsvs, 'FALSE')
        };
    }
    return {
        txt: await getIpUrlTxt(urlTxts, num),
        csv: await getIpUrlCsv(urlCsvs, 'TRUE')
    };
}

async function getIpUrlTxt(urlTxts, num) {
    if (!urlTxts || urlTxts.length === 0) {
        return [];
    }

    let ipTxt = "";
    const controller = new AbortController();
    const timeout = setTimeout(() => {
        controller.abort();
    }, 2000);

    try {
        const urlMappings = urlTxts.map(entry => {
            const [url, suffix] = entry.split('@');
            return { url, suffix: suffix ? `@${suffix}` : '' };
        });

        const responses = await Promise.allSettled(
            urlMappings.map(({ url }) =>
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Accept': 'text/html,application/xhtml+xml,application/xml;',
                        'User-Agent': projectName
                    },
                    signal: controller.signal
                }).then(response => response.ok ? response.text() : Promise.reject())
            )
        );

        for (let i = 0; i < responses.length; i++) {
            const response = responses[i];
            if (response.status === 'fulfilled') {
                const suffix = urlMappings[i].suffix;
                const content = response.value
                    .split('\n')
                    .filter(line => line.trim() !== "")
                    .map(line => line + suffix)
                    .join('\n');

                ipTxt += content + '\n';
            }
        }
    } catch (error) {
        errorLogs(error);
    } finally {
        clearTimeout(timeout);
    }
    log(`getIpUrlTxt-->ipTxt: ${ipTxt} \n `);
    let newIpTxt = await addIpText(ipTxt);
    const hasAcCom = urlTxts.includes(defaultIpUrlTxt);
    if (hasAcCom && typeof randomNum === 'number' && randomNum !== 0) {
        newIpTxt = getRandomItems(newIpTxt, num);
    }

    return newIpTxt;
}

async function getIpUrlTxtToArry(urlTxts) {
    if (!urlTxts || urlTxts.length === 0) {
        return [];
    }
    let ipTxt = "";
    const controller = new AbortController();

    const timeout = setTimeout(() => {
        controller.abort();
    }, 2000);

    try {
        const responses = await Promise.allSettled(urlTxts.map(apiUrl => fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Accept': 'text/html,application/xhtml+xml,application/xml;',
                'User-Agent': projectName
            },
            signal: controller.signal
        }).then(response => response.ok ? response.text() : Promise.reject())));
        for (const response of responses) {
            if (response.status === 'fulfilled') {
                const content = await response.value;
                ipTxt += content + '\n';
            }
        }
    } catch (error) {
        errorLogs(error);
    } finally {
        clearTimeout(timeout);
    }

    const newIpTxt = await addIpText(ipTxt);
    log(`urlTxts: ${urlTxts} \n ipTxt: ${ipTxt} \n newIpTxt: ${newIpTxt} `);
    return newIpTxt;
}

async function getIpUrlCsv(urlCsvs, tls) {
    if (!urlCsvs || urlCsvs.length === 0) {
        return [];
    }
    const newAddressesCsv = [];

    const fetchCsvPromises = urlCsvs.map(async (csvUrl) => {
        const [url, suffix] = csvUrl.split('@');
        const suffixText = suffix ? `@${suffix}` : '';
        try {
            const response = await fetch(url);
            if (!response.ok) {
                errorLogs('Error fetching CSV:', response.status, response.statusText);
                return;
            }
            const text = await response.text();
            const lines = text.includes('\r\n') ? text.split('\r\n') : text.split('\n');
            if (lines.length < 2) {
                errorLogs('CSV file is empty or has no data rows');
                return;
            }
            const header = lines[0].trim().split(',');
            const tlsIndex = header.indexOf('TLS');
            const ipAddressIndex = 0;
            const portIndex = 1;
            const dataCenterIndex = tlsIndex + 1;
            const speedIndex = header.length - 1;
            if (tlsIndex === -1) {
                errorLogs('CSV file missing required TLS field');
                return;
            }

            for (let i = 1; i < lines.length; i++) {
                const columns = lines[i].trim().split(',');
                if (columns.length < header.length) {
                    continue;
                }
                const tlsValue = columns[tlsIndex].toUpperCase();
                const speedValue = parseFloat(columns[speedIndex]);
                if (tlsValue === tls && speedValue > sl) {
                    const ipAddress = columns[ipAddressIndex];
                    const port = columns[portIndex];
                    const dataCenter = columns[dataCenterIndex];
                    newAddressesCsv.push(`${ipAddress}:${port}#${dataCenter}${suffixText}`);
                }
            }
        } catch (error) {
            errorLogs('Error processing CSV URL:', csvUrl, error);
        }
    });

    await Promise.all(fetchCsvPromises);
    log(`newAddressesCsv: ${newAddressesCsv} \n `);
    return newAddressesCsv;
}

function getConfigHtml(host, remark, v2, clash) {
    log(`------------getConfigHtml------------------`);
    log(`id: ${id} \n host: ${host} \n remark: ${remark} \n v2: ${v2} \n clash: ${clash} `);
    const title = decodeBase64Utf8(fileName);
    const fullTitle = title + '-' + projectName;

    const htmlHead = `
        <head>
        <title>${fullTitle}</title>
        <meta name='description' charset='UTF-8' content='This is a project to generate free vmess nodes. For more information, please subscribe youtube(AM科技) https://youtube.com/@am_clubs and follow GitHub https://github.com/amclubs ' />
        <style>
            body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            color: #333;
            padding: 0;
            margin: 0;
            }
            a {
            text-decoration: none;
            }
            img {
            max-width: 100%;
            height: auto;
            }
            pre {
            white-space: pre-wrap;
            word-wrap: break-word;
            background-color: #fff;
            border: 1px solid #ddd;
            padding: 10px;
            margin: 0;
            border-radius: 8px;
            }

            /* 按钮统一样式 */
            .link-row a, button {
            flex: 1;
            margin: 0 5px 5px 5px;
            padding: 10px 0;
            border-radius: 8px;
            text-align: center;
            font-weight: bold;
            cursor: pointer;
            border: none;
            transition: all 0.3s;
            background: linear-gradient(135deg, #5563DE, #3344cc);
            color: #fff;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            }

            .link-row a:hover, button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.2);
            background: linear-gradient(135deg, #3344cc, #223399);
            }

            .links { margin-top: 15px; font-size: 14px; }
            .link-row { display: flex; justify-content: space-between; margin-bottom: 10px; gap: 6px; }

            /* Dark mode */
            @media (prefers-color-scheme: dark) {
            body {
                background-color: #1e1e2f;
                color: #f0f0f0;
            }
            pre {
                background-color: #282a36;
                border-color: #6272a4;
            }
            .link-row a, button {
                background: linear-gradient(135deg, #5563DE, #3344cc);
                color: #fff;
                box-shadow: 0 4px 10px rgba(0,0,0,0.3);
            }
            .link-row a:hover, button:hover {
                transform: translateY(-2px);
                box-shadow: 0 6px 12px rgba(0,0,0,0.5);
                background: linear-gradient(135deg, #3344cc, #223399);
            }
            }
        </style>
        </head>
        `;

    const header = `
        <div class="links">
            <div class="link-row">
                <a href="${ytName}" target="_blank">🎬 YouTube</a>
                <a href="${tgName}" target="_blank">💬 Telegram</a>
            </div>
            <div class="link-row">
                <a href="${ghName}" target="_blank">📂 GitHub</a>
                <a href="${bName}" target="_blank">🌐 Blog</a>
            </div>
            <div class="link-row">
                <a href="https://${host}/${id}/setting" rel="noopener">⚙️ 自定义设置</a>
            </div>
        </div>
  `;

    const httpAddr = `https://${host}/${id}`;
    const output = cleanLines(`
        ################################################################
        订阅地址, 支持 Base64、clash-meta、sing-box、Quantumult X、小火箭、surge 等订阅格式, ${remark}
        ---------------------------------------------------------------
        通用订阅地址: <button onclick='copyToClipboard("${httpAddr}?sub")'><i class="fa fa-clipboard"></i> 点击复制订阅地址 </button>
        ${httpAddr}?sub

        Base64订阅地址: <button onclick='copyToClipboard("${httpAddr}?base64")'><i class="fa fa-clipboard"></i> 点击复制订阅地址 </button>
        ${httpAddr}?base64

        clash订阅地址: <button onclick='copyToClipboard("${httpAddr}?clash")'><i class="fa fa-clipboard"></i> 点击复制订阅地址 </button>
        ${httpAddr}?clash

        singbox订阅地址: <button onclick='copyToClipboard("${httpAddr}?singbox")'><i class="fa fa-clipboard"></i> 点击复制订阅地址 </button>
        ${httpAddr}?singbox
        ---------------------------------------------------------------
        ################################################################
        v2
        ---------------------------------------------------------------
        ${v2}
        ---------------------------------------------------------------
        ################################################################
        clash
        ---------------------------------------------------------------
        ${clash}
        ---------------------------------------------------------------
        ################################################################
    `);

    const html = `
        <html>
        ${htmlHead}
        <body>
            ${header}
            <pre>${output}</pre>
            <div style="
                margin: 20px auto;
                max-width: 600px;
                text-align: center;
                background: linear-gradient(135deg, #ffcc70, #ff884d);
                color: #222;
                padding: 12px 16px;
                border-radius: 8px;
                font-weight: bold;
                box-shadow: 0 3px 8px rgba(0,0,0,0.15);
            ">
                🚧 在线优先 IP 功能正在开发中，敬请期待 🚀
            </div>
            <script>
                function copyToClipboard(text) {
                navigator.clipboard.writeText(text)
                    .then(() => {
                    alert("Copied to clipboard");
                    })
                    .catch(err => {
                    console.error("Failed to copy to clipboard:", err);
                    });
                }
            </script>
        </body>
        </html>
        `;
    return html;
}

function cleanLines(str) {
    return str
        .split('\n')
        .map(line => line.trimEnd())
        .map(line => line.replace(/^\s+/, ''))
        .filter((line, i, arr) => {
            if (i === 0 || i === arr.length - 1) {
                return line.trim() !== '';
            }
            return true;
        })
        .join('\n');
}


/** -------------------Home page-------------------------------- */
async function getSettingHtml(host) {
    const title = decodeBase64Utf8(fileName);
    const fullTitle = title + '-自定义设置';

    return `
    <html>
    <head>
    <title>${fullTitle}</title>
    <meta charset="UTF-8" />
    <style>
        :root {
        --primary: #5563DE;
        --primary-hover: #3344cc;
        --bg-light: linear-gradient(135deg, #f8faff, #eef1ff);
        --bg-dark: linear-gradient(135deg, #1e1e2f, #2a2a3f);
        --card-bg-light: #ffffff;
        --card-bg-dark: #2b2b3b;
        --text-light: #333;
        --text-dark: #f0f0f0;
        --border-light: #ddd;
        --border-dark: #444;
        --link-bg: #f0f0f0;
        --link-bg-dark: #3a3a4a;
        --link-color: #111;
        }

        body {
        font-family: "Segoe UI", Arial, sans-serif;
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background: var(--bg-light);
        color: var(--text-light);
        display: flex;
        justify-content: center;
        padding: 10px 0;
        transition: background 0.5s, color 0.5s;
        }

        @media (prefers-color-scheme: dark) {
        body {
            background: var(--bg-dark);
            color: var(--text-dark);
        }
        }

        .container {
        width: 90%;
        max-width: 650px;
        }

        .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        }

        .navbar-left {
        display: flex;
        align-items: center;
        gap: 8px;
        }

        .back-btn {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        background: none;
        border: none;
        color: var(--primary);
        font-size: 14px;
        cursor: pointer;
        transition: color 0.3s, transform 0.2s;
        }

        .back-btn:hover {
        color: var(--primary-hover);
        transform: translateX(-2px);
        }

        .navbar-right a {
        margin-left: 12px;
        text-decoration: none;
        color: var(--primary);
        font-weight: 500;
        transition: color 0.3s;
        font-size: 14px;
        }

        .navbar-right a:hover {
        color: var(--primary-hover);
        }

        form {
        background: var(--card-bg-light);
        padding: 15px 15px;
        border-radius: 12px;
        box-shadow: 0 6px 15px rgba(0,0,0,0.08);
        transition: background 0.5s, box-shadow 0.3s;
        }

        @media (prefers-color-scheme: dark) {
        form {
            background: var(--card-bg-dark);
            box-shadow: 0 6px 15px rgba(0,0,0,0.25);
        }
        }

        label {
        display: block;
        margin-top: 10px;
        font-weight: 600;
        font-size: 13px;
        }

        input, select {
        width: 100%;
        padding: 6px 8px;
        margin-top: 2px;
        border: 1px solid var(--border-light);
        border-radius: 6px;
        font-size: 13px;
        box-sizing: border-box;
        transition: border-color 0.3s, background 0.3s;
        }

        input:focus, select:focus {
        outline: none;
        border-color: var(--primary);
        background: #f9faff;
        }

        @media (prefers-color-scheme: dark) {
        input, select {
            background: #3a3a4a;
            border: 1px solid var(--border-dark);
            color: var(--text-dark);
        }
        input:focus, select:focus {
            background: #46465a;
        }
        }

        .form-title {
        text-align: center;
        font-size: 18px;
        font-weight: 600;
        color: var(--primary);
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px;
        }

        .form-title .icon {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        background: var(--primary);
        color: #fff;
        border-radius: 50%;
        font-size: 12px;
        }

        #generatedLink {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: var(--link-bg);
        color: var(--link-color);
        font-size: 13px;
        padding: 4px 8px;
        border-radius: 6px;
        margin-bottom: 6px;
        word-break: break-all;
        }

        @media (prefers-color-scheme: dark) {
        #generatedLink {
            background: var(--link-bg-dark);
            color: #fff;
        }
        }

        #generatedLink button {
        background: var(--primary);
        color: #fff;
        border: none;
        padding: 2px 6px;
        font-size: 12px;
        border-radius: 4px;
        cursor: pointer;
        }

        #generatedLink button:hover {
        background: var(--primary-hover);
        }

        button.save-btn {
        width: 100%;
        background-color: var(--primary);
        color: white;
        border: none;
        padding: 10px;
        font-size: 14px;
        border-radius: 6px;
        cursor: pointer;
        transition: transform 0.2s, background-color 0.3s;
        margin-top: 4px;
        }

        button.save-btn:hover {
        background-color: var(--primary-hover);
        transform: translateY(-1px);
        }

        button.save-btn:active {
        transform: translateY(1px);
        }
        .error-msg {
        color: #e74c3c;
        font-size: 12px;
        margin-top: 2px;
        margin-bottom: 4px;
        }

    </style>
    </head>
    <body>
    <div class="container">
        <div class="navbar">
        <div class="navbar-left">
            <button class="back-btn" onclick="goHome()">🏠 返回主页</button>
        </div>
        <div class="navbar-right">
            <a href="https://youtube.com/@am_clubs?sub_confirmation=1" target="_blank">🎬 YouTube</a>
            <a href="https://t.me/am_clubs" target="_blank">💬 Telegram</a>
            <a href="https://github.com/am-cf-tunnel" target="_blank">📂 GitHub</a>
            <a href="https://amclubss.com" target="_blank">🌐 Blog</a>
        </div>
        </div>

        <form id="configForm">
        <h2 class="form-title"><span class="icon">⚙️</span> 自定义设置</h2>

        <div id="generatedLink" style="display:none;">
            <span id="linkText"></span>
            <button type="button" onclick="copyLink()">复制</button>
        </div>

        <label>UUID</label>
        <input type="text" id="UUID" name="HOUUIDST" placeholder="必填：UUID (例如：d0298536-d670-4045-bbb1-ddd5ea68683e)" />

        <label>HOST</label>
        <input type="text" id="HOST" name="HOST" placeholder="必填：Cloudflare节点域名 (例如：vless.amclubss.com)" />

        <label>IP_URL</label>
        <input type="text" id="IP_URL" name="IP_URL" placeholder="可选：优先IP地址 (例如：https://raw.github.../ipUrl.txt)" />

        <label>PROXYIP</label>
        <input type="text" id="PROXYIP" name="PROXYIP" placeholder="可选：反代IP或域名或地址 (例如：proxyip.amclubs.kozow.com)" />

        <label>SOCKS5</label>
        <input type="text" id="SOCKS5" name="SOCKS5" placeholder="可选：SOCKS5代理 (例如：socks5://user:pass@ip:port)" />

        <label>SUB_CONFIG</label>
        <input type="text" id="SUB_CONFIG" name="SUB_CONFIG" placeholder="可选：订阅转换配置文件 (例如：https://raw.github.../ACL4SSR_Online_Mini.ini)" />
        <label>SUB_CONVERTER</label>
        <input type="text" id="SUB_CONVERTER" name="SUB_CONVERTER" placeholder="可选：订阅转换后端api地址 (例如：url.v1.mk)" />

        <label>NAT64_PREFIX</label>
        <input type="text" id="NAT64_PREFIX" name="NAT64_PREFIX" placeholder="可选：NAT64前缀 (例如：2602:fc59:b0:64::)" />
        <label>NAT64</label>
        <select id="NAT64" name="NAT64">
            <option value="true">启用</option>
            <option value="false">关闭</option>
        </select>

        <label>PROT_TYPE</label>
        <select id="PROT_TYPE" name="PROT_TYPE">
            <option value="">默认</option>
            <option value="vless">vless</option>
            <option value="trojan">trojan</option>
        </select>

        <label>HOST_REMARK</label>
        <select id="HOST_REMARK" name="HOST_REMARK">
            <option value="false">关闭</option>
            <option value="true">启用</option>
        </select>

        <button type="button" class="save-btn" onclick="saveSettings()">💾 生成链接</button>
        </form>
    </div>

    <script>
        function goHome() {
            window.location.href = '/${id}';
        }

        function saveSettings() {
        const uuid = document.getElementById('UUID').value.trim();
        const hostInput = document.getElementById('HOST').value.trim();
        document.querySelectorAll('.error-msg').forEach(el => el.remove());
        let hasError = false;
        if (!uuid) {
            showError('UUID', '请填写 UUID');
            hasError = true;
        }
        if (!hostInput) {
            showError('HOST', '请填写 HOST');
            hasError = true;
        }
        if (hasError) return; 

        const params = new URLSearchParams();
        ['UUID','HOST','IP_URL','PROXYIP','SOCKS5','SUB_CONFIG','SUB_CONVERTER','HOST_REMARK','PROT_TYPE','NAT64','NAT64_PREFIX'].forEach(k => {
            const val = document.getElementById(k).value.trim();
            if (val) params.append(k, val);
        });

        const link = \`https://${host}/${id}?sub&\` + params.toString();
        const linkDiv = document.getElementById('generatedLink');
        const linkText = document.getElementById('linkText');
        linkText.textContent = link;
        linkDiv.style.display = 'flex';
        }

        function showError(fieldId, message) {
        const input = document.getElementById(fieldId);
        const error = document.createElement('div');
        error.className = 'error-msg';
        error.textContent = message;
        input.insertAdjacentElement('afterend', error);
        }

        function copyLink() {
        const linkText = document.getElementById('linkText').textContent;
        navigator.clipboard.writeText(linkText).then(() => {
            alert('链接已复制到剪贴板');
        });
        }
    </script>
    </body>
    </html>
    `;
}

async function login(req, env, res = null) {
    const method = req.method || (req instanceof Request ? req.method : 'GET');

    const renderLoginPage = (heading, status = 200) => {
        const html = renderPage({
            base64Title: pName,
            suffix: '-登录',
            heading,
            bodyContent: `
                <form method="POST">
                    <input type="password" name="password" placeholder="输入访问密码" required />
                    <button type="submit">登录</button>
                </form>
            `,
            ytName, tgName, ghName, bName
        });
        if (res && typeof res.setHeader === 'function') {
            res.setHeader("Content-Type", "text/html; charset=UTF-8");
            if (typeof res.status === 'function') {
                res.status(status).send(html);
            } else {
                res.write(html);
                res.end();
            }
            return;
        }
        return new Response(html, { status, headers: { "Content-Type": "text/html; charset=UTF-8" } });
    };

    log(`[LOGIN] → method: ${method}`);
    if (method === "GET") return renderLoginPage('🔐 请输入密码登录');

    if (method === "POST") {
        let body = '';
        if (req instanceof Request) {
            body = await req.text();
        } else if (req.on) {
            await new Promise(resolve => {
                req.on('data', chunk => { body += chunk.toString(); });
                req.on('end', resolve);
            });
        }

        const params = new URLSearchParams(body);
        const inputPassword = params.get("password")?.trim();
        log(`[LOGIN] → POST 输入密码: "${inputPassword}"`);

        if (inputPassword === id) {
            log(`[LOGIN] → 密码正确`);
            if (!uuid || !host) {
                return renderLoginPage(`❌ UUID或HOST变量未设置`, 400);
            }
            log(`[LOGIN] → 跳转到 id=${id}`);
            return redirectToId(id, req, res);
        } else {
            log(`[LOGIN] → 密码错误`);
            return renderLoginPage('❌ 密码错误，请重新尝试', 403);
        }
    }
    return renderLoginPage('Method Not Allowed', 405);
}

async function redirectToId(id, req, res = null) {
    if (!id) id = 'default';

    const envType = (typeof process !== 'undefined' && process.release?.name === 'node') ? 'Node/Vercel' :
        (typeof WebSocketPair !== 'undefined' && typeof addEventListener === 'function') ? 'Cloudflare Worker' :
            'Unknown';

    log(`[redirectToId] → id: ${id}, env: ${envType}, req.url: ${req.url}`);

    // Node / Vercel
    if (res) {
        log(`[redirectToId] → Node/Vercel 重定向到 /${id}`);
        res.writeHead(302, { Location: `/${id}` });
        res.end();
        return { status: 302, text: async () => '' }; // 返回对象，防止 mainHandler crash
    }

    // Edge / CF Worker
    const fullUrl = new URL(req.url, `https://${req.headers.get('host') || 'localhost'}`);
    log(`[redirectToId] → CF Worker 重定向到 ${fullUrl.origin}/${id}`);
    return Response.redirect(`${fullUrl.origin}/${id}`, 302);
}

function renderPage({ base64Title, suffix = '', heading, bodyContent, ytName, tgName, ghName, bName }) {
    const title = decodeBase64Utf8(base64Title);
    const fullTitle = title + suffix;

    return `<!DOCTYPE html>
    <html lang="zh-CN">
    <head>
    <meta charset="UTF-8">
    <title>${fullTitle}</title>
    <style>
    body {
        font-family: 'Segoe UI', Arial, sans-serif;
        background: linear-gradient(135deg, #5563de, #89f7fe);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
        color: #333;
    }
    .login-container {
        background: #fff;
        padding: 35px 30px;
        border-radius: 15px;
        box-shadow: 0 8px 25px rgba(0,0,0,0.2);
        width: 380px;
        text-align: center;
        animation: fadeIn 0.6s ease-in-out;
    }
    h1 { font-size: 22px; margin-bottom: 20px; color: #444; }
    input[type="password"] {
        width: 100%;
        padding: 12px;
        font-size: 16px;
        margin-top: 10px;
        border: 1px solid #ccc;
        border-radius: 8px;
        box-sizing: border-box;
        text-align: center;
    }
    button {
        margin-top: 20px;
        width: 100%;
        padding: 12px;
        font-size: 16px;
        border: none;
        background-color: #5563de;
        color: white;
        border-radius: 8px;
        cursor: pointer;
        font-weight: bold;
        transition: background 0.3s;
    }
    button:hover { background-color: #3344cc; }
    .links { margin-top: 20px; font-size: 14px; }
    .link-row { display: flex; justify-content: space-between; margin-bottom: 10px; }
    .link-row a {
        flex: 1;
        margin: 0 5px;
        padding: 6px 0;
        color: #5563DE;
        text-decoration: none;
        text-align: center;
        border-radius: 6px;
        background: #f1f3ff;
        transition: all 0.3s;
    }
    .link-row a:hover { background: #e0e4ff; color: #333; }
    @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }
    @media (prefers-color-scheme: dark) {
        body {
            background: linear-gradient(135deg, #1e1e2f, #30324a);
            color: #f0f0f0;
        }
        .login-container { background: #2b2b3c; color: #eee; }
        input[type="password"] {
            background: #3a3a4d; color: #fff; border-color: #555;
        }
        button { background-color: #6b74e6; }
        .link-row a { background: #3a3a4d; color: #9db4ff; }
        .link-row a:hover { background: #4b4b6a; }
    }
    </style>
    </head>
    <body>
    <div class="login-container">
    <h1>${heading}</h1>
    ${bodyContent}
    <div class="links">
        <div class="link-row">
            <a href="${ytName}" target="_blank">🎬 YouTube</a>
            <a href="${tgName}" target="_blank">💬 Telegram</a>
        </div>
        <div class="link-row">
            <a href="${ghName}" target="_blank">📂 GitHub</a>
            <a href="${bName}" target="_blank">🌐 Blog</a>
        </div>
    </div>
    </div>
    </body>
    </html>`;
}

