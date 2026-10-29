import { useState } from 'react';
import {
  Activity, ArrowDownToLine, ArrowUpFromLine, Check, ChevronRight,
  CircleHelp, Copy, Globe2, KeyRound, LockKeyhole, Plus, RefreshCw,
  ShieldCheck, Sparkles, Wifi, Zap
} from 'lucide-react';

const locations = [
  { id: 'fr', country: 'Франция', city: 'Париж', flag: '🇫🇷', code: 'FR', note: 'Для повседневного использования' },
  { id: 'ie', country: 'Ирландия', city: 'Дублин', flag: '🇮🇪', code: 'IE', note: 'Альтернативная локация' }
];

export default function App() {
  const [selected, setSelected] = useState('fr');
  const [notice, setNotice] = useState('');
  const [setup, setSetup] = useState(false);
  const active = locations.find(x => x.id === selected);

  const notify = message => setNotice(message);

  return <div className="app">
    <header className="topbar">
      <a className="brand" href="#" aria-label="Happ VPN Panel">
        <span className="brand-icon"><ShieldCheck size={22}/></span>
        <span>happ<span className="purple">.</span><small>VPN PANEL</small></span>
      </a>
      <div className="top-actions">
        <span className="demo"><i/> Панель в демо-режиме</span>
        <div className="avatar">H</div>
      </div>
    </header>

    <main className="content">
      <section className="hero">
        <div>
          <div className="eyebrow"><Sparkles size={14}/> ЛИЧНАЯ VPN-ПАНЕЛЬ</div>
          <h1>Твоя сеть.<br/><span>Твои правила.</span></h1>
          <p className="intro">Управляй локациями и профилями Happ в одном месте.</p>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-a"/><div className="orbit orbit-b"/>
          <div className="hero-shield"><ShieldCheck size={60}/></div>
          <span className="float-icon one"><LockKeyhole size={16}/></span>
          <span className="float-icon two"><Globe2 size={16}/></span>
        </div>
      </section>

      <section className="summary">
        <article className="panel connection">
          <div className="label"><span className="icon purple-bg"><Wifi size={18}/></span> Состояние подключения</div>
          <div className="big-status"><i/> Не подключено</div>
          <p>Сервер ещё не настроен</p>
          <div className="panel-foot"><span>Happ client</span><b>Ожидает настройки</b></div>
        </article>
        <article className="panel">
          <div className="label"><span className="icon blue-bg"><Globe2 size={18}/></span> Локации</div>
          <div className="metric">02</div><p>Добавлены в интерфейс</p>
          <div className="flags">🇫🇷 <span>🇮🇪</span></div>
        </article>
        <article className="panel">
          <div className="label"><span className="icon green-bg"><Activity size={18}/></span> Трафик</div>
          <div className="metric">—</div><p>Нет данных от сервера</p>
          <div className="bars">{Array.from({length:12}, (_,i)=><i key={i}/>)}</div>
        </article>
      </section>

      <section className="section">
        <div className="section-head">
          <div><h2>Локации</h2><p>Выбери регион для будущего VPN-профиля</p></div>
          <button className="btn secondary" onClick={() => setSetup(!setup)}><Plus size={16}/> Настроить сервер</button>
        </div>
        {setup && <div className="notice-card">
          <span className="notice-icon"><KeyRound size={19}/></span>
          <div><strong>Нужен реальный VPN-сервер</strong><p>Vercel и Supabase могут обслуживать сайт и данные, но сами не маршрутизируют VPN-трафик. Сначала выберем доступный сервер и протокол.</p></div>
          <button className="x" onClick={() => setSetup(false)} aria-label="Закрыть">×</button>
        </div>}
        <div className="locations">
          {locations.map(loc => <button key={loc.id} className={`location ${selected===loc.id?'selected':''}`} onClick={() => {setSelected(loc.id);setNotice('')}} aria-pressed={selected===loc.id}>
            <div className="location-top"><span className="flag">{loc.flag}</span><span className="code">{loc.code}</span><span className="check">{selected===loc.id&&<Check size={14}/>}</span></div>
            <h3>{loc.country}</h3><div className="city">{loc.city}</div><p>{loc.note}</p>
            <div className="location-foot"><span><i/> Сервер не настроен</span><small>—</small></div>
          </button>)}
          <button className="add-location" onClick={() => notify('Добавим новые локации, когда найдём доступные серверы.')}><span><Plus size={20}/></span><b>Добавить локацию</b><small>Когда появится сервер</small></button>
        </div>
      </section>

      <section className="bottom">
        <article className="panel profile">
          <div className="section-head compact"><div><h2>Профиль Happ</h2><p>Конфигурация клиента</p></div><span className="tag">Не создан</span></div>
          <div className="empty-profile"><span className="profile-icon"><KeyRound size={22}/></span><div><b>Профиль пока не готов</b><p>Сначала настроим сервер для локации «{active.country}», затем подготовим конфигурацию для импорта в Happ.</p></div></div>
          <button className="btn primary wide" onClick={() => notify('Профиль пока не создан: сначала требуется настроить реальный сервер.')}><Copy size={16}/> Проверить готовность профиля</button>
        </article>
        <article className="panel quick">
          <div className="section-head compact"><div><h2>Быстрые действия</h2><p>Инструменты панели</p></div></div>
          <button className="action" onClick={() => notify('Статус: реальный VPN-сервер ещё не подключён.')}><span className="action-icon"><RefreshCw size={17}/></span><span><b>Обновить статус</b><small>Проверить состояние панели</small></span><ChevronRight size={16}/></button>
          <button className="action" onClick={() => setSetup(true)}><span className="action-icon"><Zap size={17}/></span><span><b>Настройка сервера</b><small>Следующий шаг проекта</small></span><ChevronRight size={16}/></button>
          <a className="action" href="https://github.com/alt-w600d/happ-vpn-panel" target="_blank" rel="noreferrer"><span className="action-icon"><CircleHelp size={17}/></span><span><b>Репозиторий проекта</b><small>Исходный код на GitHub</small></span><ChevronRight size={16}/></a>
        </article>
      </section>

      {notice && <div className="toast" role="status"><Check size={16}/><span>{notice}</span><button onClick={() => setNotice('')} aria-label="Закрыть">×</button></div>}
      <footer><span>© 2026 Happ VPN Panel · Личный проект</span><span><LockKeyhole size={13}/> Секреты не хранятся в интерфейсе</span></footer>
    </main>
  </div>;
}