import React from 'react';
import { useHistory } from 'react-router-dom';
import styled　from 'styled-components';
import MuiButton from '@material-ui/core/Button';

export type TopProps = {
    className?: string;
  };

const BaseTop: React.FC<TopProps> = ({className}) => {
    const history = useHistory();

    return (
        <div className={className}>
            <MuiButton
                className="button"
                onClick={() => history.push('/taskInput')}
                variant="contained"
                color="primary"
                style={{ width: '600px', height: '100px' }}
            >
                タスク入力ページへ
            </MuiButton>
        </div>
    );
};

const Top = styled(BaseTop)`
    .button {
        justify-content: center;
        margin-top: 300px;
    }
`;

export default Top