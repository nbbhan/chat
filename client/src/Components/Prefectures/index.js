function Prefectures() {
    return (
        <div className="prefectures">
            <div>
                <select>
                    <optgroup label="Group 1">
                        <option>Option 1.1</option>
                    </optgroup>
                    <optgroup label="Group 2">
                        <option>Option 2.1</option>
                        <option>Option 2.2</option>
                    </optgroup>
                    <optgroup label="Group 3" disabled>
                        <option>Option 3.1</option>
                        <option>Option 3.2</option>
                        <option>Option 3.3</option>
                    </optgroup>
                </select>
            </div>
        </div>
    )
}

export default Prefectures
