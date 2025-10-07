const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Basic root endpoint
app.get("/", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Backend</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    max-width: 800px; 
                    margin: 50px auto; 
                    padding: 20px;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }
                .container {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 30px;
                    border-radius: 10px;
                    backdrop-filter: blur(10px);
                }
                h1 { text-align: center; margin-bottom: 30px; }
                .endpoint {
                    background: rgba(255, 255, 255, 0.2);
                    padding: 15px;
                    margin: 10px 0;
                    border-radius: 5px;
                }
                a { color: #ffd700; text-decoration: none; }
                a:hover { text-decoration: underline; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>🚀 Simple Backend API</h1>
                <p>Welcome to your simple backend server! This is perfect for learning cloud deployment.</p>
                
                <h3>Available Endpoints:</h3>
                <div class="endpoint">
                    <strong>GET /</strong> - This welcome page
                </div>
                <div class="endpoint">
                    <strong>GET /api/info</strong> - <a href="/api/info">JSON API information</a>
                </div>
                <div class="endpoint">
                    <strong>GET /about</strong> - <a href="/about">About page (HTML)</a>
                </div>
                <div class="endpoint">
                    <strong>GET /dashboard</strong> - <a href="/dashboard">Dashboard page (HTML)</a>
                </div>
                
                <p style="text-align: center; margin-top: 30px;">
                    Ready for cloud deployment! 🌟
                </p>
            </div>
        </body>
        </html>
    `);
});

// JSON API endpoint
app.get("/api/info", (req, res) => {
  res.json({
    message: "Welcome to the Simple Backend API",
    version: "1.0.0",
    author: "Jewoola Favour",
    endpoints: [
      { path: "/", method: "GET", description: "Welcome page" },
      { path: "/api/info", method: "GET", description: "API information" },
      { path: "/about", method: "GET", description: "About page" },
      { path: "/dashboard", method: "GET", description: "Dashboard page" },
    ],
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    ready_for_cloud: true,
  });
});

// About page (HTML response)
app.get("/about", (req, res) => {
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>About - Simple Backend</title>
            <style>
                body { 
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    max-width: 800px; 
                    margin: 50px auto; 
                    padding: 20px;
                    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
                    color: white;
                    line-height: 1.6;
                }
                .card {
                    background: rgba(255, 255, 255, 0.15);
                    padding: 40px;
                    border-radius: 15px;
                    backdrop-filter: blur(10px);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                }
                h1 { text-align: center; margin-bottom: 20px; font-size: 2.5em; }
                .feature {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 20px;
                    margin: 15px 0;
                    border-radius: 8px;
                    border-left: 4px solid #ffd700;
                }
                .back-link {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 25px;
                    text-decoration: none;
                    color: white;
                    transition: background 0.3s;
                }
                .back-link:hover {
                    background: rgba(255, 255, 255, 0.3);
                }
            </style>
        </head>
        <body>
            <div class="card">
                <h1>📖 About This Project</h1>
                
                <div class="feature">
                    <h3>🎯 Purpose</h3>
                    <p>This is a simple Express.js backend designed for learning cloud deployment. It's lightweight, easy to understand, and perfect for getting started with cloud deployment.</p>
                </div>
                
                <div class="feature">
                    <h3>🔧 Technologies Used</h3>
                    <ul>
                        <li>Node.js - JavaScript runtime</li>
                        <li>Express.js - Web framework</li>
                        <li>HTML/CSS - Frontend presentation</li>
                    </ul>
                </div>
                
                <div class="feature">
                    <h3>☁️ Deployment Ready</h3>
                    <p>This application is configured to work seamlessly with cloud platforms. The PORT environment variable is handled automatically for cloud deployment.</p>
                </div>
                
                <div class="feature">
                    <h3>👨‍💻 Author</h3>
                    <p>Created by Jewoola Favour for backend learning and cloud deployment practice.</p>
                </div>
                
                <a href="/" class="back-link">← Back to Home</a>
            </div>
        </body>
        </html>
    `);
});

// Dashboard page (HTML response)
app.get("/dashboard", (req, res) => {
  const currentTime = new Date().toLocaleString();
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Dashboard - Simple Backend</title>
            <style>
                body { 
                    font-family: 'Arial', sans-serif;
                    margin: 0;
                    padding: 20px;
                    background: linear-gradient(135deg, #2c3e50, #34495e);
                    color: white;
                    min-height: 100vh;
                }
                .dashboard {
                    max-width: 1200px;
                    margin: 0 auto;
                }
                h1 { 
                    text-align: center; 
                    margin-bottom: 40px; 
                    font-size: 2.5em;
                    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                }
                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 20px;
                    margin-bottom: 30px;
                }
                .stat-card {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 25px;
                    border-radius: 10px;
                    text-align: center;
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                }
                .stat-number {
                    font-size: 2em;
                    font-weight: bold;
                    color: #3498db;
                    margin-bottom: 10px;
                }
                .info-section {
                    background: rgba(255, 255, 255, 0.1);
                    padding: 30px;
                    border-radius: 10px;
                    margin-bottom: 20px;
                }
                .back-link {
                    display: inline-block;
                    padding: 12px 25px;
                    background: #3498db;
                    color: white;
                    text-decoration: none;
                    border-radius: 25px;
                    transition: background 0.3s;
                }
                .back-link:hover {
                    background: #2980b9;
                }
                .status {
                    display: inline-block;
                    padding: 5px 15px;
                    background: #27ae60;
                    border-radius: 20px;
                    font-size: 0.9em;
                }
            </style>
        </head>
        <body>
            <div class="dashboard">
                <h1>📊 Server Dashboard</h1>
                
                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-number">🟢</div>
                        <h3>Server Status</h3>
                        <span class="status">Online</span>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-number">3</div>
                        <h3>Active Endpoints</h3>
                        <p>Ready to serve</p>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-number">⚡</div>
                        <h3>Performance</h3>
                        <p>Optimized for Cloud</p>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-number">🌍</div>
                        <h3>Deployment</h3>
                        <p>Cloud Ready</p>
                    </div>
                </div>
                
                <div class="info-section">
                    <h3>🔧 System Information</h3>
                    <p><strong>Current Time:</strong> ${currentTime}</p>
                    <p><strong>Node.js Version:</strong> ${process.version}</p>
                    <p><strong>Environment:</strong> ${
                      process.env.NODE_ENV || "development"
                    }</p>
                    <p><strong>Port:</strong> ${PORT}</p>
                    <p><strong>Platform:</strong> ${process.platform}</p>
                </div>
                
                <div class="info-section">
                    <h3>📈 Quick Stats</h3>
                    <p>This dashboard shows real-time information about your simple backend server. Perfect for monitoring your cloud deployment!</p>
                    <ul>
                        <li>✅ Express.js server running smoothly</li>
                        <li>✅ All endpoints responding correctly</li>
                        <li>✅ Ready for production deployment</li>
                        <li>✅ Cloud platform compatible</li>
                    </ul>
                </div>
                
                <a href="/" class="back-link">← Back to Home</a>
            </div>
        </body>
        </html>
    `);
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`📱 Local: http://localhost:${PORT}`);
  console.log(`☁️  Ready for cloud deployment!`);
});
