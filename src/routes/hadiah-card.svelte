<script>
        import Button, { Icon, Label } from '@smui/button';
import Card, {Content, MediaContent,Media,Actions, ActionButtons} from '@smui/card'
	import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Textfield from '@smui/textfield'
    import HelperText from '@smui/textfield/helper-text'
    import gsap from 'gsap';
    import { onMount } from 'svelte';
    import {HADIAH_ID,CONTENT_HADIAH} from './const.svelte'
import IconButton from '@smui/icon-button';

let frontCardInput =""
let frontCard
let backCard
let card

onMount(() => {
    gsap.set(backCard,{rotationY: -180})
    const masterTl = gsap.timeline()
})


export let whatDone
export let modifyWhatDone
export let frontDesc

let errMsg = "kau cuma perlu mata lo"
let errFlag = 0 // 1 msgnormal 2 msgdone
let errMsgDone = "kau ketik lagi ba"

let triggerFlip = () => {
    gsap.to(backCard,{
        rotationY: 0,
        duration : 1
    })
    gsap.to(frontCard,{
        rotationY: 180,
        duration : 1 ,
    })
    gsap.to(card,{z:50},0)
    gsap.to(card,{z:0},0.5)

}

let handleButtonClick = () => {
    const key = checkIdOk(frontCardInput)
    console.log(key)
    if (key != "") {
        handleBackSide(key)
        errFlag = 0
        triggerFlip()
        modifyWhatDone(key)
    }
}

let checkIdOk = (inputText) => {
    for (let [key, ids] of Object.entries(HADIAH_ID)) {
        for(let id of ids){

            if (inputText.includes(id)){
                console.log(id)
                console.log("pemisah")
                console.log(inputText)
                if (whatDone[key] == false){
                    return key
                }else {
                    errFlag = 2
                    return ""
                }
            } else {
                errFlag = 1
            }
            
        }
    }
    return ""
}
let showMsg = ""
let handleErrorFlag = (errFlag) => {
    switch(errFlag){
        case 1 :  return errMsg;
        case 2 : return errMsgDone;
        default : ""
    }
}

let backsideData = {
        "title" : "tah apa ini",
        "picture" : "https",
        "backmsg" : "test",
        "picuter-alt" : "cek internet"
    }
let handleBackSide = (key) => {
     backsideData = CONTENT_HADIAH[key]
}

$: showMsg = handleErrorFlag(errFlag)

</script>
<div class="cardBase card" bind:this={card}>
    <form class="cardFront card" bind:this={frontCard}>
        <Card style=" height: 24em !important;width : 19em !important;">
            <Content class="mdc-typography--body2">


                <div style="display: flex; flex-direction:column; justify-content:center;align-items:center">
                <Icon class="material-icons" title="Lock">lock</Icon>
                    <h6 style="text-align: center;">
                        {frontDesc}
                    </h6>
                    <div>
                        <Textfield invalid={errFlag != 0 ? true : false} bind:value={frontCardInput} label="ayo apa hayo" variant="outlined">
                            <HelperText persistent  slot="helper" >
                                <div class={errFlag == 0 ? "opa-hide" : "" }>
                                    {showMsg}
                                </div>
                            </HelperText>
                        </Textfield>
                        
                    </div>
                </div>
                
            </Content>
            <Actions style="display:flex; justify-content:center">
                <ActionButtons>
                    <Button variant={"outlined"} on:click={handleButtonClick}>
                        <Label>H&M</Label>
                    </Button>
                </ActionButtons>
            </Actions>
        </Card>
    </form>
    
    <div class="cardBack card" bind:this={backCard}>
        <Card style=" height: 24em !important;width : 19em !important;">
            <div style="padding: 1rem;" class="backCover">
                <h6 class="mdc-typography--headline6" style="margin: 0;">
                  {backsideData.title}
                </h6>
                <span style="margin: 0; color: #888; font-size:0.65em">
                  {backsideData.subtitle}
                </span>
              </div>
            <Media aspectRatio="16x9" style={`background-image: url(./${backsideData.picture}.jpg);`} class={"backImage"}/>
            <div class="backCover" style="height:100%">
                <Content class="mdc-typography--body2" style="text-align:center">
                    <span>
                        {backsideData.backmsg}
                    </span>
                </Content>
            </div>
           
        </Card>
    </div>
</div>


<style>

    .card{
        height: 24em !important;
        width : 19em !important;

        display:flex;
        flex-direction:column;
        justify-content:center;
        transform-style: "preserve-3d";
        transform: perspective(1000);
    }
    .cardFront{
        position: relative;
        
    }
    .cardBack{
        position : absolute;
        backface-visibility: hidden;
    }
    .cardBase{
        height: 24em !important;
        width : 19em !important;
        position: relative;
    }

    .opa-hide{
        opacity: 0;
    }

    .backCover {
        background-color:#546E7A ;
        color: #fff;
    }
    
    .backImage {
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: center;
        background-size: cover;

    }
</style>