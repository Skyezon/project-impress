<script>
    import Card, {Content} from '@smui/card'
	import LayoutGrid, { Cell } from '@smui/layout-grid';
    import Textfield from '@smui/textfield'
    import {code} from './const.svelte'


    export let flowState;
    export let increaseFlowState
    export let firstCode

    let firstCard;

    let handleFirstCode = () => {
        console.log(firstCode)
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
    
</script>

<div style={flowState == 1 ? "display: flex; height : 100%; justify-content : center; align-items:center; flex-direction:column" : "display:none;"}>
    <div>
        <h4>{handleFirstCode()}</h4>
    </div>
    <div>
        <h4>Jadiii harusnya orang yang nerima ini ada dapat 3 barang lainnya sih, apa aja itu kira"</h4>
    </div>
    <LayoutGrid>
        <Cell span={3}>
            <div>
                <Card>
                    <Content>
                        <Textfield variant="outlined" bind:value={firstCard} label="plz isi"></Textfield>
                    </Content>
                </Card>
            </div>
        </Cell>
        <Cell span={3}>
teafd
        </Cell>
        <Cell span={3}>
test1
        </Cell>
        <Cell span={3}>
            test
        </Cell>
    </LayoutGrid>

</div>