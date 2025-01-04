const customComponentsObj =  {
  'qkdiv': '<template><div id="{{props.sid}}" class="{{props.cl}}" onclick="eh" ontouchstart="eh" ontouchend="eh" ontouchcancel="eh" onlongpress="eh" catchtouchmove="eh" ontouchmove="eh"><slot></slot></div></template>',
  'qktext': '<template><text id="{{props.sid}}" class="{{props.cl}}" value="{{props.v}}" onclick="eh" ontouchstart="eh" ontouchend="eh" ontouchcancel="eh" onlongpress="eh" catchtouchmove="eh" ontouchmove="eh"><slot></slot></text></template>',
  'qkspan': '<template><span id="{{props.sid}}" class="{{props.cl}}" value="{{props.v}}" onclick="eh" ontouchstart="eh" ontouchend="eh" ontouchcancel="eh" onlongpress="eh" catchtouchmove="eh" ontouchmove="eh"><slot></slot></span></template>',
  'qkimage': '<template><image id="{{props.sid}}" class="{{props.cl}}" src="{{props.src}}" alt="{{props.alt}}" onclick="eh" ontouchstart="eh" ontouchend="eh" ontouchcancel="eh" onlongpress="eh" catchtouchmove="eh" ontouchmove="eh"></image></template>',
  'qklist': '<template><list id="{{props.sid}}" class="{{props.cl}}" onclick="eh" ontouchstart="eh" ontouchend="eh" ontouchcancel="eh" onlongpress="eh" catchtouchmove="eh" ontouchmove="eh"><slot></slot></list></template>',
  'qklist-item': '<template><list-item id="{{props.sid}}" class="{{props.cl}}" type="{{props.type}}" disallowintercept="{{props.disallowintercept || false}}" onclick="eh" ontouchstart="eh" ontouchend="eh" ontouchcancel="eh" onlongpress="eh" catchtouchmove="eh" ontouchmove="eh"><slot></slot></list-item></template>',
  'qkvideo': '<template><video id="{{props.sid}}" class="{{props.cl}}" src="{{props.src}}" autoplay="{{props.autoplay === undefined ? false : props.autoplay}}" controls="{{props.controls === undefined ? true : props.controls }}" muted="{{props.muted === undefined ? false : props.muted}}" orientation="{{props.orientation === undefined ? landscape : props.orientation}}"  onclick="eh" ontouchstart="eh" ontouchend="eh" ontouchcancel="eh" onlongpress="eh" catchtouchmove="eh" ontouchmove="eh"></video></template>',
  'qktextarea': '<template><textarea id="{{props.sid}}" class="{{props.cl}}" placeholder="{{props.placeholder}}" maxlength="{{props.maxlength || 100}}" onclick="eh" ontouchstart="eh" ontouchend="eh" ontouchcancel="eh" onlongpress="eh" catchtouchmove="eh" ontouchmove="eh"></textarea></template>'
}

export { customComponentsObj }