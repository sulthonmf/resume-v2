import { useState, useCallback } from 'react';

export function useCopyEmail(email: string = 'sulthonmf@gmail.com') {
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.error('Failed to copy text: ', err);
      });
  }, [email]);

  return {
    copied,
    copyEmail,
  };
}
