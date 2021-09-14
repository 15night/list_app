import React,{memo} from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { TaskType } from '../App'
import styled from 'styled-components';
import { Card } from '@material-ui/core';


// コンポーネントの引数にとれる型
export type TaskListProps = {
  className?: string;
  onClick?: ()=> void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>)=> void;
  task: TaskType;
  onBlur?: ()=> void;
}

const BaseTaskCard: React.FC<TaskListProps> = ({
  task,
  className,
  onClick,
  onChange,
  onBlur
}) => {
  return(
    <div className={className} >
      <Card className={'task_card'}>
        <div className={'task_item'} >
          <HighlightOffIcon onClick ={onClick} className={'close_icon'} />
            <input type="text" className={'task_name'}  value={task.taskName} onChange={onChange} onBlur={onBlur}/>
        </div>
      </Card>
    </div>
  )
}

const TaskCard = styled(BaseTaskCard)`
  & {
    .task_card {
      margin-top: 15px;
      margin-bottom: 5px;
    }
    .task_item {
      display: flex;
      flex-direction: row;
      align-items: center
    }
    .close_icon {
      fill: #ec5990;
      width: 2em;
    }
    . task_name {
      font-size: 32px;
      height: 42px;
    }
  }
`;

export default memo<TaskListProps>(TaskCard);