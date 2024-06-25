
export default function UserInput({ data, onDataChange}) {
  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input type="number" required value={data.initialInvestment} onChange={(event) => onDataChange('initialInvestment',event.target.value)}/>
        </p>
        <p>
          <label>Annual Investment</label>
          <input type="number" required value={data.annualInvestment} onChange={(event) => onDataChange('annualInvestment',event.target.value)}/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input type="number" required value={data.expectedReturn} onChange={(event) => onDataChange('expectedReturn',event.target.value)}/>
        </p>
        <p>
          <label>Duration</label>
          <input type="number" required value={data.duration} onChange={(event) => onDataChange('duration',event.target.value)}/>
        </p>
      </div>
    </section>
  );
}
