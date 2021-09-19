<template>
  <div>
    <h2>关于</h2>
    <div class="wrapper" ref="aaa">
      <ul class="scroll-content">
        <li>xxx1</li>
        <li>xxx2</li>
        <li>xxx3</li>
        <li>xxx4</li>
        <li>xxx5</li>
        <li>xxx6</li>
        <li>xxx7</li>
        <li>xxx8</li>
        <li>xxx9</li>
        <li>xxx10</li>
        <li>xxx11</li>
        <li>xxx12</li>
        <li>xxx13</li>
        <li>xxx14</li>
        <li>xxx15</li>
        <li>xxx16</li>
        <li>xxx17</li>
        <li>xxx18</li>
        <li>xxx19</li>
        <li>xxx20</li>
        <li>xxx21</li>
        <li>xxx22</li>
        <li>xxx23</li>
        <li>xxx24</li>
        <li>xxx25</li>
        <li>xxx26</li>
        <li>xxx27</li>
        <li>xxx28</li>
        <li>xxx29</li>
        <li>xxx30</li>
        <li>xxx31</li>
        <li>xxx32</li>
        <li>xxx33</li>
        <li>xxx34</li>
        <li>xxx35</li>
        <li>xxx36</li>
        <li>xxx37</li>
        <li>xxx38</li>
        <li>xxx39</li>
        <li>xxx40</li>
        <li>xxx41</li>
        <li>xxx42</li>
        <li>xxx43</li>
        <li>xxx44</li>
        <li>xxx45</li>
        <li>xxx46</li>
        <li>xxx47</li>
        <li>xxx48</li>
        <li>xxx49</li>
        <li>xxx50</li>
        <li>xxx51</li>
        <li>xxx52</li>
        <li>xxx53</li>
        <li>xxx54</li>
        <li>xxx55</li>
        <li>xxx56</li>
        <li>xxx57</li>
        <li>xxx58</li>
        <li>xxx59</li>
        <li>xxx60</li>
        <li>xxx61</li>
        <li>xxx62</li>
        <li>xxx63</li>
        <li>xxx64</li>
        <li>xxx65</li>
        <li>xxx66</li>
        <li>xxx67</li>
        <li>xxx68</li>
        <li>xxx69</li>
        <li>xxx70</li>
        <li>xxx71</li>
        <li>xxx72</li>
        <li>xxx73</li>
        <li>xxx74</li>
        <li>xxx75</li>
        <li>xxx76</li>
        <li>xxx77</li>
        <li>xxx78</li>
        <li>xxx79</li>
        <li>xxx80</li>
        <li>xxx81</li>
        <li>xxx82</li>
        <li>xxx83</li>
        <li>xxx84</li>
        <li>xxx85</li>
        <li>xxx86</li>
        <li>xxx87</li>
        <li>xxx88</li>
        <li>xxx89</li>
        <li>xxx90</li>
        <li>xxx91</li>
        <li>xxx92</li>
        <li>xxx93</li>
        <li>xxx94</li>
        <li>xxx95</li>
        <li>xxx96</li>
        <li>xxx97</li>
        <li>xxx98</li>
        <li>xxx99</li>
        <li>xxx100</li>
      </ul>
    </div>
  </div>
</template>

<script>
import betterScroll from "better-scroll";
export default {
  name: "About",
  data() {
    return {
      scroll: null,
    };
  },
  methods:{
  },
  mounted() {
    this.scroll = new betterScroll(this.$refs.aaa,{
      probeType:3,
      pullUpLoad:true,
      click:true
    });
    this.scroll.on('pullingUp',()=>{
      console.log('上拉加载');
      this.scroll.finishPullUp()
    })
    this.scroll.on('scroll',(option)=>{
      console.log(option);
    })
  },
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  overflow: hidden;
}
</style>