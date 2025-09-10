import React from "react";

export default function Page() {
  return (
    <main>
      <h1>PPR Demo - Next.js 15 Canary</h1>
      <p>このページはPPRの最小構成サンプルです。</p>
      <div style={{ marginTop: '20px' }}>
        <a href="/ppr-experiment" style={{ 
          color: '#0070f3', 
          textDecoration: 'none',
          padding: '10px 20px',
          border: '1px solid #0070f3',
          borderRadius: '4px'
        }}>
          PPR実験ページへ →
        </a>
      </div>
    </main>
  );
}
