import React from "react";

export default function Page() {
  return (
    <main>
      <h1>PPR Demo - Next.js 15 Canary</h1>
      <p>このページはPPRの最小構成サンプルです。</p>
      <div style={{ marginTop: '20px', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <a href="/ppr-experiment" style={{ 
          color: '#0070f3', 
          textDecoration: 'none',
          padding: '10px 20px',
          border: '1px solid #0070f3',
          borderRadius: '4px'
        }}>
          PPR実験ページへ →
        </a>
        <a href="/nested-ppr" style={{ 
          color: '#4caf50', 
          textDecoration: 'none',
          padding: '10px 20px',
          border: '1px solid #4caf50',
          borderRadius: '4px'
        }}>
          ネストしたPPR実験へ →
        </a>
        <a href="/dynamic-children-static" style={{ 
          color: '#9333ea', 
          textDecoration: 'none',
          padding: '10px 20px',
          border: '1px solid #9333ea',
          borderRadius: '4px'
        }}>
          動的+静的children実験 →
        </a>
        <a href="/dynamic-io-experiment" style={{ 
          color: '#059669', 
          textDecoration: 'none',
          padding: '10px 20px',
          border: '1px solid #059669',
          borderRadius: '4px'
        }}>
          Dynamic IO実験 →
        </a>
        <a href="/fully-dynamic" style={{ 
          color: '#1e40af', 
          textDecoration: 'none',
          padding: '10px 20px',
          border: '1px solid #1e40af',
          borderRadius: '4px'
        }}>
          Layout.tsx実験 →
        </a>
        <a href="/no-layout-dynamic" style={{ 
          color: '#dc2626', 
          textDecoration: 'none',
          padding: '10px 20px',
          border: '1px solid #dc2626',
          borderRadius: '4px'
        }}>
          Layout.tsxなし実験 →
        </a>
        <a href="/static-page-dynamic-layout" style={{ 
          color: '#f59e0b', 
          textDecoration: 'none',
          padding: '10px 20px',
          border: '1px solid #f59e0b',
          borderRadius: '4px'
        }}>
          静的ページ+動的Layout →
        </a>
        <a href="/completely-static" style={{ 
          color: '#0ea5e9', 
          textDecoration: 'none',
          padding: '10px 20px',
          border: '1px solid #0ea5e9',
          borderRadius: '4px'
        }}>
          完全静的 →
        </a>
      </div>
    </main>
  );
}
