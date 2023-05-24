function ObjectTest1() {

    const num =  100
    let 현재상태 = 'refund'

    return(
        <>
            <p>{num}</p>
            {
                {info:<p>상품정보</p>,
                shipping:<p>배송관련</p>,
                refund:<p>환불관련</p>
                }[현재상태]
            }
        </>
    )
}

export default ObjectTest1;