function Sports() {
    const sports = ["Football", "Tennis", "Kabbadi", "Kho-Kho", "Hockey"];
  
    return (
      <div>
        <ol>
          {sports.map((sport, index) => <li key={index}>{sport}</li>)}
        </ol>
      </div>
    );
  }
  
  export default Sports;
  