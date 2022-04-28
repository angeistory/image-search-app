const Form = ({ setWord, getPhotoData }) => { // ← getPhotoData 追加
    return (
        <form>
            <input type="text"
			name="keyword"
			placeholder="e.g. cat"
			onChange={e => setWord(e.target.value)} // ← 追加
 />
            <button type="submit" onClick={getPhotoData}>Search</button>  {/* ← onClick追加 */}
        </form>
    );
}

export default Form;
