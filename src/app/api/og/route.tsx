import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Get the searchParams from the request URL
    const { searchParams } = new URL(request.url);
    
    // Get title, description, and locale from the searchParams
    const title = searchParams.get('title') || 'Gutricious';
    const description = searchParams.get('description') || 'Personalized Nutrition Platform';
    const locale = searchParams.get('locale') || 'en';
    
    // Generate the OpenGraph image
    return new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
            backgroundColor: '#ffffff',
            backgroundImage: 'linear-gradient(to bottom right, #ffffff, #f0f0f0)',
            padding: '40px 80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '150px',
              height: '150px',
              background: '#2ae8d3',
              borderBottomLeftRadius: '100%',
              opacity: 0.8,
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '150px',
              height: '150px',
              background: '#2ae8d3',
              borderTopRightRadius: '100%',
              opacity: 0.8,
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              zIndex: 10,
              padding: '20px',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              borderRadius: '16px',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backdropFilter: 'blur(5px)',
              maxWidth: '90%',
            }}
          >
            <h1
              style={{
                fontSize: 70,
                fontWeight: 800,
                margin: '0 0 20px',
                color: '#333',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 36,
                fontWeight: 500,
                color: '#666',
                margin: 0,
                marginBottom: 10,
                maxWidth: '800px',
              }}
            >
              {description}
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                marginTop: 20,
              }}
            >
              <p
                style={{
                  fontSize: 28,
                  fontWeight: 600,
                  color: '#2ae8d3',
                }}
              >
                Gutricious.com
              </p>
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error(`Error generating OG image: ${e}`);
    return new Response(`Error generating OG image: ${e}`, { status: 500 });
  }
}
