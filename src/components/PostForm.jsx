import React from 'react';
import MyInput from './UI/input/MyInput';
import MyButton from './UI/button/MyButton';
import { useState } from 'react';


const PostForm = ({create}) => {
  const [post, setPost] = useState({title:'', body:''})

  const addNewPost = (e) => {
    e.preventDefault()
    if (!post.title || !post.body) {
      // alert('Ху да вол хьо')
      return
    }

    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({title: '', body: ''})
  }

  return (
      <form>
        {/* {Управляемый компонент} */}
        <MyInput 
            value={post.title}
            onChange={e => setPost({...post, title: e.target.value})} 
            type="text" 
            placeholder="Название поста"
        />
        {/* {Неупраляемый\Неконтролируемый компонент} */}
        <MyInput 
            value={post.body}
            onChange={e => setPost({...post, body: e.target.value})} 
            type="text" 
            placeholder="Описание поста"
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
  );
};

export default PostForm;