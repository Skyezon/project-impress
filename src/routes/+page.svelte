<script>
    import Home from "./home.svelte";
    import Hadiah from "./hadiah.svelte";
	import Redirection from "./redirection.svelte";
	import Ending from "./ending.svelte";
    import { ref,push } from "firebase/database";
    import db from "./firebase"

    let flowState = 0
    let firstCode = ''
    const timeStart = Date.now()

    let increaseFlowState = () => {
        flowState++;
    }

    let setFirstCode = (param) => {
        firstCode = param
    }

    function handleFinalClick(textAttempt) {
        const timeEnd = Date.now()
        push(ref(db,"timestamp"),{
            "startTime" : timeStart,
            "endTime" : timeEnd
        })
        increaseFlowState()
    }
</script>


{#if flowState == 0}
<Redirection increaseFlowState={increaseFlowState}/>
{:else if flowState == 1}
<Home increaseFlowState={increaseFlowState} setFirstCode={setFirstCode}/>
{:else if flowState == 2}
<Hadiah increaseFlowState={increaseFlowState} firstCode={firstCode}/>
{:else if flowState == 3}
<Ending firstCode={firstCode} handleFinalClick={handleFinalClick}/>
{:else if flowState == 4}
<div>
    <p style="display: flex; flex-direction:column; justify-content: center; align-items:center; height:100%;">napa lo masi disini</p>

</div>
{/if}