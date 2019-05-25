import { createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';

export const localVue = createLocalVue();
localVue.use(Vuex);

export const storeSetup = (state = {}, mutations = {}, actions = {}) => {
  return new Vuex.Store({
    state,
    mutations,
    actions
  });
};

export const categories = [
  {
    id: '5c5ae8a3608b273a5257041e',
    title: 'Productivity',
    book_ids: [
      '5c5ae9fc608b273a52570422',
      '5c5ae9fc608b273a52570423',
      '5c5ae9fc608b273a52570424',
      '5c5ae9fc608b273a52570425'
    ]
  },
  {
    id: '5c5ae8a3608b273a5257041f',
    title: 'Economics',
    book_ids: [
      '5c5ae9fc608b273a52570425',
      '5c5ae9fc608b273a52570426',
      '5c5ae9fc608b273a52570427',
      '5c5ae9fc608b273a52570428'
    ]
  },
  {
    id: '5c5ae8a3608b273a52570420',
    title: 'History',
    book_ids: [
      '5c5ae9fc608b273a52570429',
      '5c5ae9fc608b273a5257042a',
      '5c5ae9fc608b273a5257042b',
      '5c5ae9fc608b273a5257042c'
    ]
  },
  {
    id: '5c5ae8a3608b273a52570421',
    title: 'Science',
    book_ids: [
      '5c5ae9fc608b273a5257042e',
      '5c5ae9fc608b273a5257042f',
      '5c5ae9fc608b273a52570430',
      '5c5ae9fc608b273a52570431'
    ]
  }
];

export const books = [
  {
    image_url:
      'https://images.blinkist.com/images/books/5c570ea26cee070008d6c880/3_4/640.jpg',
    id: '5c5ae9fc608b273a52570422',
    category_id: '5c5ae8a3608b273a5257041e',
    title: 'Audax ut aer explicabo',
    content:
      'At libero molestiae ipsa dolores. Est et sint. Quis minus ut et reprehenderit. Sed fugiat totam aspernatur ex molestiae numquam. Voluptatem quos sequi fugit. Est aut dolorem ut sed voluptatibus. Voluptas et eum amet. Et aliquam beatae sunt sunt dolorem cumque rerum. Incidunt beatae dolor adipisci corporis asperiores. Eos non occaecati commodi molestiae. Sunt sed est ad enim modi sit veniam. Consequatur beatae rerum placeat neque nihil expedita. Temporibus nesciunt animi quo eum tempore in. Vel fugiat rem. Omnis dolor pariatur nostrum incidunt quisquam eaque. Sit esse cupiditate ut cum sequi nesciunt. Dolores rerum architecto dolor accusamus incidunt aperiam. Atque nihil sit itaque perspiciatis cumque. Commodi eum molestias magni placeat asperiores. Distinctio et ut quos vero et. Dolorem ut autem sit. Velit et voluptas cumque rerum.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c57048a6cee070008f61115/3_4/640.jpg',
    id: '5c5ae9fc608b273a52570423',
    category_id: '5c5ae8a3608b273a5257041e',
    title: 'Adultus annus socius coma',
    content:
      'Sed et architecto quasi nihil fugiat ut totam. Fuga accusantium id optio accusamus et. Veritatis ut ea dolore. Amet maiores sint omnis explicabo totam qui itaque. Vitae in laboriosam dolores quasi. Quas laborum aperiam animi. Quam vitae iure. Dolorem id animi reprehenderit sunt eligendi repudiandae. Et sapiente rem est eius facere iusto recusandae. Quas distinctio rerum excepturi at atque. Rerum at tempora dignissimos sed dolore beatae voluptas. At quia repellendus optio quae eos nobis. Laborum ad architecto voluptates minima qui. Aperiam provident iste excepturi occaecati consectetur. Vel et hic autem ut harum ut. Exercitationem molestiae quis doloribus officiis ad est iusto. Quae alias aut consequuntur. Minus consectetur quo magnam recusandae saepe suscipit dolorem. Quo ea incidunt impedit odit. Aliquid a fuga hic. Eum blanditiis ut assumenda illum.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c56fb116cee070008d6c85f/3_4/640.jpg',
    id: '5c5ae9fc608b273a52570424',
    category_id: '5c5ae8a3608b273a5257041e',
    title: 'Congregatio vulnus similique et',
    content:
      'Saepe est quaerat dolorum incidunt earum. Itaque omnis quidem similique laborum. Qui qui ipsum debitis inventore ratione. Hic iusto et fugiat harum beatae officiis. Aut est id error harum. Quia molestias magnam ad earum repellendus eius aliquam. Cum et quos iusto id sed. Velit ipsum nulla dolores iste. Omnis ut labore. Quod placeat facilis dolorum et ipsa. Libero suscipit est aut et. In laudantium accusantium molestias. Nesciunt alias ducimus ab sed distinctio sit. Deserunt aut sed non modi. Saepe ut deserunt quam maxime delectus non. Quasi aspernatur omnis sint. Nihil maiores magni voluptates quos ullam. Eum quo veniam quasi voluptatem tempore. Eum voluptates rerum. Sapiente dolorem nesciunt. Aut vitae provident. Ut commodi id atque consequatur.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c5060e06cee070007d816be/3_4/640.jpg',
    id: '5c5ae9fc608b273a52570425',
    category_id: '5c5ae8a3608b273a5257041e',
    title: 'Conduco aliqua ambulo demergo',
    content:
      'Non rerum veritatis eos doloribus. Vel omnis ratione expedita quae. Distinctio vitae ratione et aspernatur at. Facere eligendi unde. Odio itaque laudantium fugiat eos quia. Et voluptas ut illo aperiam. Et in qui aliquam inventore et dolores. Dignissimos doloribus quas. Et voluptas eos debitis unde odit. Ea pariatur est cumque. Dolores maiores aut voluptatem reprehenderit rerum. Nostrum accusamus quasi rerum repellat qui. Modi aut alias. Omnis mollitia laudantium fugiat id sed. Porro corrupti dolore. Debitis est quod. Et officia voluptatum. Cum ut vitae ullam aut eius. Nesciunt repellendus sint error aliquid voluptatem inventore. Sunt sed vitae quo quasi.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c5033c36cee070007d815a0/3_4/640.jpg',
    id: '5c5ae9fc608b273a52570426',
    category_id: '5c5ae8a3608b273a5257041f',
    title: 'Harum utpote ademptio vorax',
    content:
      'Voluptatem doloribus est ut et. Et sapiente dolore ut omnis. Quos aut quo enim beatae inventore cumque maiores. In vel asperiores doloribus molestiae. Quam aut recusandae. Harum excepturi error sint beatae. Maiores voluptas quidem ex voluptatem molestiae cumque dolores. Ea quidem illo. Vel distinctio velit adipisci commodi consequatur. Sed rerum nam vitae laudantium. Voluptates sit soluta et non. Ipsa ad ipsum. Ad voluptatem natus sed et est voluptatem. Ipsam qui aut cupiditate voluptates. Et quod ut dolores tempora modi eum. Delectus aspernatur ut qui. Incidunt hic dignissimos at qui. Eveniet mollitia ipsum suscipit quasi vero corporis. Atque voluptate sit. Sapiente dolorum aut voluptatibus. Dolor iste ut consequatur fuga accusantium aut dolore.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c50537f6cee070007c14ae0/3_4/640.jpg',
    id: '5c5ae9fc608b273a52570427',
    category_id: '5c5ae8a3608b273a5257041f',
    title: 'Comparo cometes voro curvo',
    content:
      'Omnis voluptates quia et eveniet omnis aliquam. Et maxime non reiciendis possimus amet porro. Modi est quidem ipsum et quae repellat officia. Nesciunt quam qui. Quae velit esse qui aut et necessitatibus. Blanditiis repudiandae quia ab occaecati. Nam aut tenetur molestias laboriosam veniam sint eos. Consequatur fugit vel facilis incidunt et molestiae aut. Numquam cumque veniam et aperiam voluptate saepe. Aut assumenda iste. Omnis dolorem ratione odio quia. Voluptas enim placeat maiores amet nisi quae. Aut fugit labore. Inventore accusamus sint ut tempore. Unde voluptas nostrum sed odio. Quibusdam dolore quidem. Et sequi non maxime facilis quis corrupti quia. Sed nesciunt aliquam enim vitae sed ratione. Veritatis qui eos aut quis totam et. Sint et ex.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c4e3aa06cee0700074da55b/3_4/640.jpg',
    id: '5c5ae9fc608b273a52570428',
    category_id: '5c5ae8a3608b273a5257041f',
    title: 'Cumque voluptate caelum dicta',
    content:
      'Et aperiam aut sunt consequatur. Est optio numquam autem suscipit labore et ducimus. Error saepe earum unde laborum. Nisi aut reprehenderit ut aut minima corrupti. Tempora ea hic repellat doloremque occaecati. Eius dicta dolorem magni vitae. Molestiae nam magni voluptatem a omnis vel. Non natus adipisci quod voluptate pariatur. Qui ut modi beatae nesciunt voluptates. Eius expedita et accusamus. Vel ad exercitationem sed magnam eos ea. Debitis dicta dolorum itaque voluptatem veniam. Facilis qui nobis corporis quis pariatur numquam. Et esse autem. Magnam et labore ea aut aperiam accusamus ex. Et porro nihil reiciendis eveniet. Velit voluptates corrupti dolor possimus sit est culpa. Quam quas possimus est rerum. Repudiandae enim explicabo nam. Qui ratione eius. Rerum esse reiciendis blanditiis molestiae suscipit distinctio possimus. Velit possimus atque facilis.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c4dfcca6cee07000731781a/3_4/640.jpg',
    id: '5c5ae9fc608b273a52570429',
    category_id: '5c5ae8a3608b273a5257041f',
    title: 'Quam vetus error est',
    content:
      'Ducimus consequuntur error. Corrupti asperiores officiis aut sint. Autem dolorem aliquam ut quod voluptas. Vel similique aspernatur dignissimos quia pariatur. Eius ullam esse laboriosam. Et quo molestiae. Fuga dolorum blanditiis facere fugiat. Quia dolore officia. Animi et molestiae atque laudantium autem. Exercitationem quia repudiandae. Unde qui quia illum tempora maiores itaque. Ab commodi laboriosam facilis enim ea porro. Maiores iusto neque animi. Sapiente et et est aut voluptatibus eum at. Numquam est dignissimos dolorum neque voluptates laborum. Rerum qui possimus. Incidunt veniam corporis voluptatem. Laborum quo cupiditate. Itaque aperiam sed laudantium et quam nisi. Sunt impedit culpa soluta in.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c4df6106cee0700074da523/3_4/640.jpg',
    id: '5c5ae9fc608b273a5257042a',
    category_id: '5c5ae8a3608b273a52570420',
    title: 'Triduana assentator ager subseco',
    content:
      'Accusamus ea quam unde. Illo qui officiis. Est et repudiandae qui enim rerum quia. Velit fugiat praesentium vel. Et suscipit molestiae expedita. Repellendus culpa vero numquam modi aperiam incidunt quasi. Ut vero totam officiis. Quis labore quos necessitatibus quia temporibus maxime officiis. Iusto temporibus officia enim. Porro tenetur est quia perferendis quia. Sit aliquam et quia. Aliquam consequatur modi et natus atque et. Earum omnis unde dolorem consequatur hic. Non est exercitationem excepturi. Aliquid numquam magni dolores quaerat ut ab cumque. Temporibus ad eum libero ab vel fuga ea. Sit temporibus omnis atque. Cupiditate dolores aut atque fugiat qui dolor esse. Dolorem laboriosam aut similique vero. Ratione ducimus voluptate et ea necessitatibus qui. Sit voluptatem nihil corrupti.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c49dafd6cee070007b962a4/3_4/640.jpg',
    id: '5c5ae9fc608b273a5257042b',
    category_id: '5c5ae8a3608b273a52570420',
    title: 'Quia torqueo deripio despirmatio',
    content:
      'Eveniet ut animi modi iusto. Omnis ipsum nobis et et et accusamus. Eum ullam ducimus. Dolores delectus velit consequatur repudiandae iste. Ut et aut ipsam consequatur iusto maiores aspernatur. Autem sint laboriosam. Inventore ea odit laudantium doloremque labore nisi. Quod maiores est. Illo et dolores atque sequi autem voluptates. Nam ut ut. Sequi quis molestiae. Quidem reprehenderit culpa ut aliquid sed sit. Tempore commodi nostrum similique voluptatum sed. Laborum et dicta dolores a. Excepturi natus voluptates recusandae nostrum totam quo. Est unde ea nulla quidem dolores quos nisi. Voluptatibus at omnis repudiandae nihil occaecati. Id explicabo earum officiis. Et est rerum voluptas ullam. Consequatur temporibus nisi a. Nihil illo aut ut et consequuntur est consequatur. Ipsam omnis vitae et laborum fugit.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c49e2896cee070007b962ac/3_4/640.jpg',
    id: '5c5ae9fc608b273a5257042c',
    category_id: '5c5ae8a3608b273a52570420',
    title: 'Cupressus est vos cubicularis',
    content:
      'Eum reprehenderit natus sit alias nostrum sit. Vel eveniet quidem rerum voluptatibus. Aut provident expedita iste repudiandae tenetur. Dolore laudantium repudiandae quia qui voluptatibus. Quis sapiente perferendis similique non exercitationem voluptatem. Quasi et beatae animi exercitationem officiis cum. Enim tempora et harum impedit. Nulla quisquam quia. Qui est ipsum voluptas necessitatibus non. Corrupti dolores ut tempora. Voluptatem perspiciatis et. Voluptates fugit tenetur. Et blanditiis magni id id nemo est. Fugiat soluta et aperiam aliquam et nihil. Libero soluta reiciendis quo sit est et nulla. Alias accusantium modi. Ut est ut fugiat nam. Laboriosam soluta fuga. Dolorum perferendis beatae. Qui autem recusandae omnis.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c4744ac6cee07000701c0fe/3_4/640.jpg',
    id: '5c5ae9fc608b273a5257042d',
    category_id: '5c5ae8a3608b273a52570420',
    title: 'Suffoco vita victoria sonitus',
    content:
      'Consectetur quidem qui. Officiis laudantium et eum. Modi quia nisi. Sit unde in consequatur. Quod iusto dolores sit est. Velit doloribus pariatur ut. Non et reprehenderit non. Aut in et sit animi. Repellat nihil deleniti similique nesciunt. Fuga asperiores et. Atque et ex vel omnis. Perspiciatis et assumenda quasi libero aut quaerat ullam. Quis illo accusantium consectetur quia consequuntur consequatur pariatur. Amet quae corporis placeat est quia et non. Aperiam molestiae temporibus veniam voluptatem labore enim. Sed ut quae. Laboriosam dolor perferendis impedit in alias. Similique illo ad est qui qui deserunt. Cupiditate enim et. Harum vero error. Distinctio et quibusdam rem deleniti.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c4886f66cee07000701c182/3_4/640.jpg',
    id: '5c5ae9fc608b273a5257042e',
    category_id: '5c5ae8a3608b273a52570421',
    title: 'Sustineo autus convoco adicio',
    content:
      'Possimus cumque qui. Incidunt aut placeat ducimus est in eveniet. Sed omnis soluta quod optio. Est quibusdam dolor temporibus praesentium recusandae fugiat. Voluptas inventore aliquam dolores cumque eum similique corporis. Maxime corrupti incidunt aut. Officia vel deleniti repudiandae illum similique. Amet odio illum ab fuga quaerat et temporibus. Illum voluptatem non. Vitae fuga eveniet. Maiores dolor incidunt non non dolorem. Et neque rem a consequatur asperiores accusantium. Beatae vel adipisci soluta eum. Saepe facere in enim accusantium distinctio nam et. Et facilis aut distinctio aut. Vitae voluptatem quis commodi. Aut aut excepturi nihil quia. Rem voluptate quibusdam dolor veniam excepturi qui unde. Aut et ipsam id autem ab ad dolor. Placeat nihil dolorem quia. Fuga omnis voluptas aut. Dolores et ut velit.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c43c0cc6cee07000701bf8a/3_4/640.jpg',
    id: '5c5ae9fc608b273a5257042f',
    category_id: '5c5ae8a3608b273a52570421',
    title: 'Considero sopor tribuo placeat',
    content:
      'Nihil rem quod qui. Eaque nihil ad eligendi occaecati est quae. Ullam nam quam porro molestiae dolores. Ipsa itaque dolores aliquam. Repellendus dolore voluptatem officiis doloremque aperiam. Accusantium non eos laborum corrupti quas recusandae. Consequatur commodi explicabo in culpa earum. Nesciunt eveniet cupiditate. Doloribus rerum atque illo quos omnis dolorum eaque. Est in quasi tenetur cupiditate. Est excepturi iure aut impedit deleniti. Et dolor quam odio sed accusamus at. Ratione explicabo repellat porro. Et ut explicabo nesciunt eos deleniti libero. Odit distinctio reprehenderit dolor aut tenetur repellendus nam. Doloribus dolores sed esse illo hic eos quisquam. Nisi consequatur ipsum autem dolorem aliquid dicta natus. Sed debitis natus. Dolore inventore ipsum vitae in quia at. In provident et perspiciatis. Sit non assumenda vel est culpa repellat.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c43b2fa6cee07000701bf7a/3_4/640.jpg',
    id: '5c5ae9fc608b273a52570430',
    category_id: '5c5ae8a3608b273a52570421',
    title: 'Pecco aequus capitulus concido',
    content:
      'Nobis non et quia dolorem id mollitia et. Aut delectus nobis quis. Corporis quae maxime quis et ab sed. Eos unde sint laudantium nisi quibusdam similique in. Eaque et nobis hic. Beatae aut laborum autem vel. Quia nisi veniam et et neque amet eum. Aliquam in ab. Culpa eum numquam enim natus praesentium sapiente et. Consectetur minima doloribus sapiente culpa odio voluptatibus impedit. Exercitationem earum officiis iure qui totam. Quis accusamus facere sunt tenetur. Itaque consectetur exercitationem neque sint rem cupiditate vel. Iusto rerum expedita natus quaerat. Dolore enim voluptatem ut unde cum voluptates. Aut et necessitatibus dolor quaerat. Consequuntur exercitationem voluptatem est quia. Id ut odio. Dolores veniam natus magnam. Provident est occaecati omnis. Sed nisi voluptatem debitis perspiciatis explicabo officia enim. Sed commodi perspiciatis totam exercitationem.'
  },
  {
    image_url:
      'https://images.blinkist.com/images/books/5c43af116cee070007b96086/3_4/640.jpg',
    id: '5c5ae9fc608b273a52570431',
    category_id: '5c5ae8a3608b273a52570421',
    title: 'Depopulo degenero caput aegre',
    content:
      'Explicabo blanditiis vitae quas. Eos repudiandae qui eos nesciunt. Aut a placeat illum provident nobis ad. Rem voluptate id totam veritatis sint. Iste ut dolorem officia quam eos. Sed harum quibusdam fugiat eos officiis nostrum. Eos laudantium harum expedita provident. Sed enim veritatis et. Iusto voluptas et sit odit ullam non velit. Veniam natus facere. Fugiat quibusdam sequi eius saepe magni qui alias. Voluptas voluptatibus quaerat repudiandae. Rerum dolorem corrupti omnis nobis quam nihil. Ut voluptate et. Impedit et maiores odit aliquid. Qui ut dolor vero molestias modi cupiditate. Necessitatibus expedita magni dolor non similique. Ex tenetur illum perspiciatis dolorem voluptatem corporis. Accusantium autem ex voluptatem. Ut et nihil impedit adipisci laborum. Similique dolor est error blanditiis consequuntur velit et. Dolores delectus sed totam mollitia id.'
  }
];
