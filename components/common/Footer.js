import React from "react";
import styles from '@/styles/Footer.module.css'
export function Footer(){
    return (<footer>
                <hr/>
                <div data-attribute-id="fnb" data-fnb-kind="investment">
                    <img style={{width:30}} src="https://images.velog.io/images/jaeeunxo1/post/b809e9c6-b5af-4cce-a13f-c9a745b4f4bb/768px-Ei-sc-github.svg.png" alt="logo"/>
                    <a href="https://github.com/joenjonghyun" target="_blank">깃허브</a> : 나의 코드를 참고하고 공유합니다.
                </div>
                <div data-attribute-id="fnb" data-fnb-kind="investment">
                    <img style={{width:30}} src="https://inthenews.co.kr/data/photos/uploads/2020/08/%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%85%B8%EC%85%98-%EB%A1%9C%EA%B3%A0.jpg" alt="logo"/>
                    <a href="https://www.notion.so/8fe04b3538d349e3ac63b86ad0c0ea3c" target="_blank">노션</a> : 프로그램 언어를 배우며 적었던 노트를 참고하고 공유합니다.
                </div>
            </footer>
    )
}