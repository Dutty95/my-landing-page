import './App.css';

const videos = [
  {
    title: "How to use the coffee maker",
    id: "1XrgeMFcvmauRIbyWIEyvLh0UaBUtAdPv",
  },
  {
    title: "How to use the cooker",
    id: "1r6_vonL9z38_3ucIOl-_H3914lr-LSPK",
  },
  {
    title: "How to use the oven",
    id: "1vIQCv1lKIvH-E_7jZeXjSIBsBvnFW_WP",
  },
  {
    title: "How to use the steamer",
    id: "1ZMErmduFe_ml6S9PjSSxvfk5sS6TxWFN",
  },
  {
    title: "Kitchen tour",
    id: "1o9opTDRvPPCbhLGfJOAS0F4dEsth59h3",
  }
];

function App() {
  return (
    <div className="App">
      <div className="header">
        <img
          src="https://drive.google.com/uc?export=view&id=12aga9MV_9zVjC4BBR7bbjV0rDJd_grqt"
          alt="The Casa Nomads Company"
          className="logo"
        />
        <h1>Learn, Discover, Experience</h1>
      </div>

      <div className="video-grid">
        {videos.map((video, index) => (
          <div key={index} className="video-card">
            <h2>{video.title}</h2>
            <iframe
              src={`https://drive.google.com/file/d/${video.id}/preview`}
              allow="autoplay"
              allowFullScreen
              title={video.title}
              width="100%"
              height="300"
            ></iframe>
          </div>
        ))}
      </div>

      <footer>
        <p>&copy; {new Date().getFullYear()} The Casa Nomads Company</p>
      </footer>
    </div>
  );
}

export default App;
