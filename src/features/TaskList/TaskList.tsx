import * as React from 'react';

import styles from './TaskList.module.scss';

export interface TaskListProps {
  
}
 
export interface TaskListState {
  title: string;
}
 
export class TaskList extends React.Component<TaskListProps, TaskListState> {
  state = { title: 'Task List'}
  render() { 
    return (
      <div className={styles.containerTitle}>{this.state.title}</div>
    );
  }
}
