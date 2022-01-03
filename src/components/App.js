import React, {useState, useEffect} from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useSearchVideos from "../hooks/useSearchVideos";


const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useSearchVideos('buildings');

    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])


    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;