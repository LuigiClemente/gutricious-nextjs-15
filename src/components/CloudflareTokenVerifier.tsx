"use client";
import { useState } from 'react';

export default function CloudflareTokenVerifier() {
  const [token, setToken] = useState('Wyy-3KkVf_TdpaHt35OxYVZBxKf03rKDQKTt8pBv');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const verifyToken = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        'https://api.cloudflare.com/client/v4/accounts/833a781f413f29e2c43d3e57972b81ce/tokens/verify',
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.errors?.[0]?.message || 'Failed to verify token');
      }
      
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setResult(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Cloudflare Token Verifier</h1>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          API Token
        </label>
        <input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="w-full p-2 border rounded-md"
          placeholder="Enter your Cloudflare API token"
        />
      </div>

      <button
        onClick={verifyToken}
        disabled={isLoading || !token.trim()}
        className={`px-4 py-2 rounded-md text-white ${
          isLoading || !token.trim() ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'
        }`}
      >
        {isLoading ? 'Verifying...' : 'Verify Token'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p className="font-bold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      {result && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h2 className="text-lg font-semibold mb-2">Verification Result:</h2>
          <pre className="bg-white p-3 rounded overflow-auto text-sm">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
