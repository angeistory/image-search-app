import { useState } from 'react' // Stateの読み込み
import axios from 'axios' // 非同期通信でデータを取得するjsライブラリ
import Title from './components/Title' // Title.jsxの読み込み
import Form from './components/Form' // Form.jsxの読み込み
import Results from './components/Results' // Results.jsxの読み込み
import './App.css'
import './font.css'
import './new.css'


function App() {
  const [word, setWord] = useState('')
// 入力したキーワードを保存するword,とsetWordの用意
  const [photo, setPhoto] = useState([]); // resに入ったデータをstateに保管

  const getPhotoData = (e) => { //Unsplashからデータを取得するための関数"getPhotoData"、getPhotoData 関数のパラメターに e を渡す
	    e.preventDefault(); // ← 追加
    axios
        .get(`https://api.unsplash.com/search/photos?query=${word}&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`) // ← ${word}に変更
// APIのURL
    // .then(res => console.log(res))  thenで受け取りresにUnsplashのデータが格納される。logは受け取れているのかコンソールで確認するため
	.then(res => {
      setPhoto(res.data.results) // 受取る配列データはdataの中の results に入っているので
    })
  }

  return (
    <div className="App">
      <Title />  {/* Titleの表示 */}
      <Form setWord={setWord} getPhotoData={getPhotoData} />  {/* Formの表示 + setWord 追加 + getPhotoDataでUnsplashからデータを取得 */}
	              <Results photo={photo} /> {/* photoのデータをResultsコンポーネントでも使得る様にする */}
      {/* {word}   ← 入力したキーワードが保存されているか確認表示。 */}
    </div>
  )
}

export default App
