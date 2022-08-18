import { ContentProps } from './content.types'


export const Content = ({
  className,
  children,
}: ContentProps) => {
  return (
    <div className={className}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sagittis hendrerit ante, vitae ultricies lorem pulvinar vulputate. Fusce mollis est id nibh bibendum tempor. Aenean sit amet urna massa. Sed eu risus eu velit laoreet gravida quis ac purus. Curabitur placerat ornare mi vitae eleifend. Curabitur non orci nec risus ultrices tincidunt ut sed orci. Integer placerat dolor sit amet dui efficitur viverra. Proin cursus faucibus mattis. Suspendisse vel ex neque.

      Nam interdum, ligula ut commodo imperdiet, nisl velit dapibus magna, vel posuere enim enim sed massa. In egestas orci aliquam neque eleifend pulvinar. Suspendisse vestibulum, eros id viverra mollis, odio nisl consequat ex, gravida interdum arcu urna eget orci. Vivamus id est quis metus imperdiet iaculis id nec nibh. Vivamus pretium tincidunt accumsan. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis accumsan, est et vestibulum imperdiet, quam diam gravida massa, ut porttitor lectus velit a turpis. Praesent felis massa, posuere quis ipsum vitae, aliquam consequat nulla. Nunc eu diam imperdiet, consectetur sapien sit amet, eleifend lacus. Vestibulum ullamcorper urna id tellus bibendum, ac bibendum ex aliquet. Donec hendrerit metus non arcu facilisis cursus. Morbi bibendum commodo aliquet. Donec faucibus aliquet elit, ut elementum nibh tristique ut. Integer euismod, leo non posuere rutrum, est elit accumsan eros, sed tincidunt sem dolor at leo. Sed eu augue sit amet tellus porta faucibus nec at erat. Pellentesque fringilla sed orci eget bibendum.

      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque sodales neque at viverra euismod. Nam at lectus gravida, fermentum metus a, rhoncus tortor. Sed ultrices turpis sagittis nisl efficitur, in ornare velit tristique. Donec eu justo viverra, blandit tortor fermentum, aliquet eros. Nunc et mauris justo. Nam molestie metus ut ipsum interdum fringilla. Suspendisse potenti. Etiam neque dolor, ultricies vitae nunc a, tempus hendrerit nisl. Integer fringilla rutrum mi, ut aliquam felis pulvinar eu. Cras tincidunt ex sem, at molestie mi porttitor ac. Quisque scelerisque ac lacus ac vestibulum. Nullam varius consectetur augue sit amet tristique. Quisque molestie sagittis justo, eget dignissim libero dictum at. Nam semper nisl accumsan magna vulputate varius.

      Quisque tincidunt, tellus et fringilla interdum, leo risus rhoncus felis, sit amet dignissim tellus sem vitae ligula. Nam a lobortis erat. In feugiat ac nibh id eleifend. Integer erat libero, lobortis vitae ipsum convallis, dictum vulputate lacus. Nullam pretium purus non porta vehicula. Nulla ex ante, feugiat ultrices mollis at, viverra vitae sapien. Etiam euismod leo est, sit amet luctus nisl egestas ut. Duis in erat pulvinar, volutpat enim in, maximus tortor. Sed ultrices lacus lectus, et tempus ex volutpat eget. Aenean rutrum diam neque, ac rutrum neque condimentum at. Etiam iaculis, augue mattis molestie pharetra, tortor neque suscipit mauris, vel convallis est tellus in velit. Mauris consectetur ornare nisl ut faucibus. Praesent at facilisis sapien, eu maximus risus. In quis molestie enim, at mollis nulla.

      Cras condimentum pellentesque risus, suscipit luctus urna eleifend sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam at nisi ante. Morbi efficitur lacus leo, non molestie enim aliquam sed. Proin non rhoncus nibh, in gravida lorem. Aenean hendrerit neque leo, ornare commodo nunc vestibulum quis. Nam dapibus convallis mauris, dapibus semper lacus vehicula rhoncus. Ut facilisis elit vitae enim tristique, eget interdum ex pretium.
      <div>
        {children}
      </div>
    </div>
  )
}
