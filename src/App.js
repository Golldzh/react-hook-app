
import React from 'react';
import { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/MyModal/MyModal'
import { usePosts } from './hooks/usePosts';

function App() {
  const [posts, setPosts] = useState([
    {id:1, title : 'JavaScript', body: 'Тоже язык программирования'},
    {id:2, title : 'Python', body: 'Язык для бэка'},
    {id:3, title : 'React', body: 'Фреймфорк'}
  ])
  const [filter, setFilter] = useState({sort:'', query: ''})
  const[modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }


  return (
    <div className="App">
      <MyButton style = {{display: 'block' ,margin: '0 auto'}}  onClick={() => setModal(true)}>
          Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style = {{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title ={'Список постов 1'}/>
    </div>  
  );
}

export default App;
