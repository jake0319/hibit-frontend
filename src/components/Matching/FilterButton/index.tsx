/** @jsxImportSource @emotion/react */

import * as s from './styles'
import { css } from '@emotion/react';

const MatchingFilterButton = ()=>{
  return(
    <>
    <s.FilterWrapper>
      <s.FilterButtonWrapper>
        <div style={{width:'216px,height:54px;'}}css={s.FilterButtonCss}>이번주 출발하는 전시🤟</div>
        <div style={{width:'201px,height:54px;'}}css={s.FilterButtonCss}>좋아요 많은 게시글 🔥</div>
        <div style={{width:'184px,height:54px;'}}css={s.FilterButtonCss}>게시글 전체보기👀</div>
        <div style={{width:'151px,height:54px;'}}css={s.WriteButtonCss}>게시글 작성 ✍</div>
      </s.FilterButtonWrapper>
    </s.FilterWrapper>
    </>
  )
}
export default MatchingFilterButton;