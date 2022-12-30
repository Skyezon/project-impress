<script>
    import Button, { Label } from '@smui/button';
	import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Textfield from '@smui/textfield'
    import {code} from './const.svelte'
    import HadiahCard from './hadiah-card.svelte';
	import { onMount } from 'svelte';
    import TextPlugin from 'gsap/TextPlugin';
    import gsap from 'gsap'
    import db from './firebase.js'
    import { ref,push } from "firebase/database";

    export let increaseFlowState
    export let firstCode


    let whatDone = {
        "BUNGA" : false,
        "BONEKA" : false,
        "BEKAL" : false
    }


    let handleTotalDone = () => {
        let totalDone = 0
        for (let [key,value] of Object.entries(whatDone)) {
            if (value){
                totalDone++
            }
        }
        if (totalDone == 3){
            console.log("trigger total done 3")
            //reverse animation
            let rev2 = reverse2.reverse(0)
            let rev1 = reverse1.reverse(0)
            masterTl.add(rev2)
            masterTl.add(rev1)
            
            masterTl.to(questionHolder,{display:"none"})
            masterTl.to(firstCodeResHolder,{display:"none"})
            
            //show input feedback field and after click jump to another page
            masterTl.to(finalWordHolder,{duration: 4 , text : finalWords})


            masterTl.to(feedbackInputHolder,{opacity: 1,display:"block"})
            masterTl.to(feedbackButtonHolder,{opacity : 1,display:"block"})

            
            
        }
        console.log("trigger handle")
    }

    let modifyWhatDone = (key) => {
        whatDone[key] = true
        handleTotalDone()
    }

    let firstCard = '';

    let handleFirstCode = () => {
        switch (firstCode) {
            case code.DIABETES : {
                return "bgs bgs memang memang teh diabetes itu ga logika manisnya"
            }
            case code.MANIS : {
                return `gampang kali ya, soal anak tk maunya kau tulis teh diabetes aja biar lebih pas. kapan" aku datang lagi kesana ya`
            }
            case code.WSD : {
                return "weshhhhhh keren juga bisa tau yoda, keren kan semuanya"
            }
            case code.GATAU : {
                return "ini berarti aku baru balas kau aja sih, dan sesuai yang aku tulis, gitu aja ga tau. motu bener, dah-dah kita lanjut dulu "
            }
        }
    }

    let card1,card2,card3
    let firstCodeResHolder, questionHolder,finalWordHolder,feedbackInputHolder,feedbackButtonHolder
    let questionWord = "Jadiii harusnya orang yang nerima ini ada dapat 3 barang yang lumayan menonjol, jadi apa aja itu kira-kira : "

    const wordTl = gsap.timeline()

    let reverse1,reverse2

    let feedback = ''

    let finalWords =`bisa juga kau siapin ba gils", karna aku ga bisa liat ato baca apa yang kau pikirkan skrg, tulis aja disini keluh kesahmu ya sampai sejauh ini`
    const masterTl = gsap.timeline()

    onMount(() => {
        gsap.registerPlugin(TextPlugin)
        masterTl.add(wordTl)
        reverse1 = wordTl.to(firstCodeResHolder,{duration:2, text: handleFirstCode(),ease: "none"})
        reverse2 = wordTl.to(questionHolder,{duration:2, text: questionWord, ease:"none",delay:3})

        masterTl.from(card1,{y:-100,opacity: 0,delay: 2})
        masterTl.from(card2,{y:-100,opacity: 0})
        masterTl.from(card3,{y:-100,opacity: 0})

    })

    function writeAttemplog(textAttempt) {
        push(ref(db,"feedback"),textAttempt)
    }

    let handleOnFeedbackClick = () => {
        if (feedback != ''){
            writeAttemplog(feedback)
        }
        increaseFlowState()
    }
    
</script>

<div style="display: flex; height : 100%; justify-content : center; align-items:center; flex-direction:column; overflow:hidden">
    <div style="text-align: center;">
        <h6 bind:this={firstCodeResHolder} style="margin: 0; margin-bottom: 1em"></h6>
        <h6 bind:this={questionHolder} style="margin:  0; margin-bottom : 2em"></h6>
    </div>
    <LayoutGrid>
        <Cell span={4} >
            <div bind:this={card1}>
                <HadiahCard  frontDesc={"sesuatu yang lembut?"} modifyWhatDone={modifyWhatDone} whatDone={whatDone}/>
            </div>
        </Cell>
        <Cell span={4}>
            <div bind:this={card2}>
                <HadiahCard  frontDesc={"sesuatu yang lumayan berwarna?"} modifyWhatDone={modifyWhatDone} whatDone={whatDone}/>
            </div>
        </Cell>
        <Cell span={4}>
            <div bind:this={card3}>
                <HadiahCard  frontDesc={"sesuatu yang bisa nyimpan?"} modifyWhatDone={modifyWhatDone} whatDone={whatDone }/>
            </div>
        </Cell>
    </LayoutGrid>

    <div style="display: flex; flex-direction:column;justify-content:center;aling-items:center;text-align:center;width:100%;">
        <h6 bind:this={finalWordHolder}></h6>
        <div bind:this={feedbackInputHolder} style="width: 100%; opacity: 0;display: none">
            <Textfield textarea style={"width: 100%"}  marginheight={0} variant="outlined" bind:value={feedback} label="klo gk mau isi juga yoda"></Textfield>
        </div>
        <div style="margin: 1em;"></div>
        <div bind:this={feedbackButtonHolder} style="margin-bottom:1em; opacity : 0; display: none">
            <Button variant={"outlined"} on:click={handleOnFeedbackClick}>
                <Label>{feedback == '' ? "Skip skip" : "Gils diisi juga rupanya"}</Label>
            </Button>
        </div>
    </div>

</div>