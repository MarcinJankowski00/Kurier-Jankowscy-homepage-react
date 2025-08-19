// pages/PaymentSuccess.jsx
import { useEffect, useState } from 'react';

export default function PaymentSuccess() {
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');
    if (!sessionId) {
      setError('Brak session_id');
      setStatus('error');
      return;
    }

    (async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/payment/session-status?session_id=${sessionId}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Błąd');

        if (data.payment_status === 'paid') {
          setStatus('paid');
        } else {
          setStatus(data.payment_status || data.status);
        }
      } catch (e) {
        setError(e.message);
        setStatus('error');
      }
    })();
  }, []);

  const handleFinish = async () => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');
    const token = localStorage.getItem('token');

    try {
      const res = await fetch('http://localhost:5000/api/payment/finalize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ session_id: sessionId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Błąd finalizacji');

    } catch (e) {
      setError(e.message);
    }
  };

  if (status === 'loading') return <p>Sprawdzam status płatności…</p>;
  if (status !== 'paid') return <p>Status: {status}{error ? ` — ${error}` : ''}</p>;

  return (
    <div>
      <h1>✅ Płatność przyjęta</h1>
      <p>Możesz teraz zakończyć zakup i zapisać bilet.</p>
      <button onClick={handleFinish}>Zakończ zakup</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </div>
  );
}
