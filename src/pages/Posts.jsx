
import {React,  useState, useEffect}from 'react';
import { usePosts } from '../hooks/usePosts';
import '../styles/App.css';
import { useFetching } from '../hooks/useFetching';
import PostList from '../components/PostList'
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyButton from '../components/UI/button/MyButton';
import MyModal from '../components/UI/MyModal/MyModal'
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { getPageCount } from '../components/utils/pages';
import Pagination from '../components/UI/pagination/Pagination';
 
function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort:'', query: ''});
  const[modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages , setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
 

  const [fetchPosts, isPostLoading, error] = useFetching(async() => {
    const response = await PostService.getAll(limit, page );
    setPosts(response.data) 
    const totalCount = (response.headers['x-total-count'])
    setTotalPages(getPageCount(totalCount, limit )) 
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (p) => {
    setPage(p);
  }

  return (
    <div className="App">
      <MyButton style = {{display: 'block' ,margin: '0 auto'}}  onClick={() => setModal(true)}>
          Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style = {{margin: '15px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {
        error &&
        <h1 style={{textAlign: 'center', margin: '50px 0'}}>Произошла ошибка ${error}</h1>
      }
      {isPostLoading 
        ?
        <div style ={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
          <Loader/>
        </div>
        : 
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title ={'Список постов'}/>
      }
      <Pagination page={page} changePage={changePage} totalPages={totalPages}/>
    </div>  
  );
}

export default Posts;