import Card from 'components/Card/Card';
import { Suspense } from 'react';

import * as S from './Lane.style';

const Lane = ({ todos, currentStatus, isDragging, handleDragging, handleUpdateList }) => {
  // Lane 에 대한 Skeleton Ui 구현 필요

  const handleDrop = e => {
    e.preventDefault();

    handleUpdateList(e.dataTransfer.getData('text'), currentStatus);
    handleDragging(false);
  };

  const handleDragOver = e => e.preventDefault();

  return (
    <S.Container
      className={`layout-cards ${isDragging ? 'layout-dragging' : ''}`}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <S.TitleContainer>
        <S.Title>{currentStatus}</S.Title>
      </S.TitleContainer>
      <Suspense fallback={<div>loading...</div>}>
        {todos?.map(
          ({ title, id, owner, profileImage, status }) =>
            status === currentStatus && (
              <Card
                key={id}
                title={title}
                id={id}
                owner={owner}
                profileImage={profileImage}
                handleDragging={handleDragging}
              />
            ),
        )}
      </Suspense>
    </S.Container>
  );
};

export default Lane;
