import React from 'react';
import Footer from './Footer';
import ContentBody from './ContentBody';
import LeftPanel from './Panel';
 
class App extends React.Component {
    render(){
        return (
            <div>
            	<LeftPanel 
            	lastName={ loginUser.lastName }
            	name={ loginUser.name }
            	/>
                <Footer />
                <ContentBody />
            </div>
        );
    }
 
}
 
export default App;