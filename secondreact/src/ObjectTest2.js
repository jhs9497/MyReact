function ObjectTest2() {

    const num =  100
    let 현재상태 = 'info'
    let 탭UI =  {
                    info:<p>상품정보</p>,
                    shipping:<p>배송관련</p>,
                    refund:<p>환불관련</p>
                }
    return(
        <>
            <p>{num}</p>
            <div>{탭UI[현재상태]}</div>
        </>
    )
}

export default ObjectTest2;