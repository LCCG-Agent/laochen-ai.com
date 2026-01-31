/**
 * 公共Footer组件
 */
export default function Footer() {
  return (
    <footer 
      className="py-6 px-6 border-t"
      style={{ borderColor: 'var(--border-primary)' }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
          © 2026 老陈AI工坊. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
