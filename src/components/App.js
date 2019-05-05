import React from 'react'
import Article from './ArticleList'
import articles from '../fixtures'

function App() {
	return (
		<div>
			<h1> App name </h1>
			<Article articles ={articles} />
		</div>	
	)
}

export default App