import '@testing-library/jest-dom';
import { vi } from 'vitest';

if (typeof window !== 'undefined') {
  window.scrollTo = vi.fn();
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
}

if (typeof global.fetch === 'undefined') {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    json: async () => ({ success: 'true' })
  });
} else {
  vi.spyOn(global, 'fetch').mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: async () => ({ success: 'true' })
    })
  );
}
