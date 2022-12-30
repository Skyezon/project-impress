<script>
	import { onMount } from 'svelte';
    import {code} from './const.svelte'
    import {gsap} from 'gsap'
	import Button from '@smui/button';
	import { Label } from '@smui/button';

    export let firstCode
    let trueEnding = false

    let handleFirstCode = () => {
        if (firstCode == code.WSD) {
            trueEnding = true
            specialLineWord = trueEndingWord
        }
    }

   export let handleFinalClick
    onMount(() => {
        let baseDuration = 5
        handleFirstCode()
        let typeWriterTl = gsap.timeline()
        typeWriterTl.to(firstLineContainer,{text:firstLine,duration:baseDuration})
        typeWriterTl.to(secondLineContainer,{text:secondLine,delay:3,duration:baseDuration * 3})
        typeWriterTl.to(specialLineContainer,{text:specialLineWord,duration:baseDuration})
        typeWriterTl.to(fourthLineContainer,{text:fourthLineWord,duration:baseDuration,delay: 3})
        typeWriterTl.to(fifthLineContainer,{text:fifthLineWord,delay:5,duration:baseDuration})
        typeWriterTl.to(sixthLineContainer,{text:sixthLineWord,duration:baseDuration})
        typeWriterTl.to(sevenContainer,{text:sevenFirstHalfWord,duration:1})
        typeWriterTl.to(sevenContainer,{text:sevenFirstHalfWord + sevenSecondHalfWord,duration:2})
        typeWriterTl.to(sevenContainer,{text:sevenFirstHalfWord,duration:baseDuration})
        typeWriterTl.to(sevenContainer,{text:sevenFirstHalfWord + sevenLastHalfWord,duration:baseDuration}) 
        
        typeWriterTl.to(eightLineContainer,{text:eightLineWord,duration:baseDuration * 2.5})
        typeWriterTl.from(buttonContainer,{y:100,opacity:0,delay:3})

        typeWriterTl.to(lastLineContainer,{text:lastLineWord,duration:3,delay:30})


    })

    let firstLineContainer
    let firstLine = `jadiii sepertinya kita sudah sampai di penghujung acara sih. gada yang aneh" lagi sayangnya, jadi keluarga-keluargamu yang mungkin lagi menonton bisa diusir aja. `
    let secondLineContainer
    let secondLine = `untuk hadiahnya sebenarnya aku mau kasi sendiri sih beberapa minggu yang lalu cuma karena satu dua hal jadi ga jadi sih (jangan kau bilang aku php lagi ya) sama rencananya aku gada buat" web ginian sih tapi terinspirasi dari seseorang yang buat ginian jadi yoda aku coba juga.`
    let specialLineContainer
    let defaultEndingWord = `harusnya ini dah jelas sih kenapa aku kasi beberapa benda paling keren di dunia ini cuma ntah kenapa kau gk tau kan, klo nanti ku bilang juga kau bilang dah basi. jadi anggap aja ini hadiah natal/tahun baru ya ga basi lagi kan dah cocok waktunya ya`
    let trueEndingWord = ` ini sebenarnya cukup hebat sih kalau kau bisa dapat yang ini di percobaan pertama, tapi ya mungkin kau dah coba lagi gk tau juga. Terus kau kzl kali kan gada yang ucapin yoda ini semua dah cukup la ya jadi jangan marah lagi ya. seperti yang kau dah ketahui ya ini sebenarnya untuk itu aja sih lol. jangan kau bilang dah basi ya.`
    let specialLineWord = defaultEndingWord
    let fourthLineContainer
    let fourthLineWord = 'jadi aku cuma mau ingatkan aja sih mumpung momennya lagi keren juga kan hari terakhir dari tahun 2022.'
    let fifthLineContainer
    let fifthLineWord = 'jangan lupa gereja ya lol'
    let sixthLineWord = `mungkin ini terakhir kali sih aku buat hal ga jelas kek gini tapi gk tau juga la tergantung kau semua.`
    let sixthLineContainer

    let sevenFirstHalfWord = `untuk `
    let sevenSecondHalfWord = `wacana di jkt`
    let sevenLastHalfWord = `rencanamu di jkt itu liat la nanti ya kau jalan sama siapa akhirnya ntah pacar/suami di masa depanmu (lol mana tau kau susul putre kan) ato masih jalan samaku aja nanti di tahun baru.`
    let sevenContainer


    let eightLineContainer
    let eightLineWord = `sama aku ada selipkan beberapa hal sih di web ini yang buat dia sedikit berbeda kalau kau bisa jawab yang pertamanya agak berbeda tapi sukakmu klo kau mau coba ulang lagi, gada tombol back juga ini jadi buka ulang aja linknya. dah la itu aja ya, enakkan teka tekiku`

    let lastLineContainer
    let lastLineWord = `apalo yang kau tunggu lagi, sumpa udah bener" gada, klo kau dah baca sampe sini ini tujuan text ini cuma buat ngusir kau aja`
    let buttonContainer
</script>



<div style="overflow: hidden;">
    <p bind:this={firstLineContainer}></p>
    <p bind:this={secondLineContainer}></p>
    <p bind:this={specialLineContainer} style="font-style: italic;"></p>
    <p bind:this={fourthLineContainer}></p>
    <p bind:this={fifthLineContainer}></p>
    <p bind:this={sixthLineContainer}></p>
    <p bind:this={sevenContainer}></p>
    <p bind:this={eightLineContainer}></p>
    <p bind:this={lastLineContainer}></p>

    <div  bind:this={buttonContainer} >
        <Button variant={'outlined'} on:click={handleFinalClick}>
            <Label>Dah la bye</Label>
        </Button>
    </div>
</div>

