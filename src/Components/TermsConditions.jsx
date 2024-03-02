const TermsConditions = ({ value, onSelect }) => {

        return (
          <div>
            <label>
              <input
                type="checkbox"
                name="terms"
                checked={value}
                onChange={(evt) => onSelect(evt.target.checked)}
              />
              I accept terms and conditions
            </label>
            <button type="button" disabled={!value}>
              Proceed
            </button>
          </div>
        );
}

export default TermsConditions