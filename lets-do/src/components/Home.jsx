function Home() {
    return (
      <div style={{color:'white',display:'flex',justifyContent:'center',marginLeft:'50vh', flexDirection:'column'}}>
        <div>
            <h4>1.What is your name?</h4>
            <input  type="text" placeholder="Name" required/>
        </div>
        <div>
            <h4>2.Whats your age?</h4>
            <input type="number" min="15" max="100" placeholder="Enter your age" required/>
        </div>
        <div>
            <h4>3.What is the main thing you want to achieve with this site?</h4>
            <input placeholder="Write your answer" type="text"/>
        </div>
        <div>
            <h4>4.How do you usually organize your task?</h4>
            <input placeholder="Write here" type="text"/>
        </div>
        <div>
            <h4>5. How are you planning to use this site?</h4>
            <input type="text" placeholder="Write here"/>
        </div>
        <div style={{marginTop:'30px'}}>
            <button>
                Start Now
            </button>
        </div>
      </div>
    );
  }
  
  export default Home;
  