const Results = ({photo}) => {
    return (
        <div className="photo-list">
            {photo.map((singleData,index) => // ← index 追加
                <a href={singleData.links.html} key={index}>  {/* ← key 追加 */}
                    <img src={singleData.urls.regular} alt={singleData.alt_description} />
                </a>
            )}
        </div>
    );
}

export default Results
