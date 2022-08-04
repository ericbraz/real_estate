import React from 'react'
import styles from './TagsComponent.module.scss'

interface Props {
   tags: string[]
}

function TagsComponent(props: Props) {
   const { tags } = props

   return (
      <span className={styles.tags}>
         {tags.map((tag) => (
            <span key={tag}>{tag}</span>
         ))}
      </span>
   )
}

export default TagsComponent
