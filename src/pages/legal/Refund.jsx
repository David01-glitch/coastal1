import LegalPage from '../../components/LegalPage.jsx';
import { site } from '../../data/site.js';

export default function Refund() {
  return (
    <LegalPage
      title="Refund Policy"
      path="/legal/refund"
      description="The refund and cancellation policy for Coastal Retirement Life, including our free newsletter and any future paid offerings."
      updated="March 1, 2024"
      intro={[
        `This Refund Policy explains our approach to payments, cancellations, and refunds at ${site.name}. We believe in being completely transparent about what is free and what, if anything, is paid.`,
        'Our core content and newsletter are, and have always been, entirely free.',
      ]}
      sections={[
        {
          heading: 'Our free content',
          paragraphs: [
            `Reading ${site.name} costs you nothing. All of our articles, guides, and resources are freely available on the Site, and our newsletter is free to join. Because no payment is required to access this content, no charges are ever made and no refunds are necessary.`,
          ],
        },
        {
          heading: 'Newsletter subscriptions',
          paragraphs: [
            'Our email newsletter is a free service. There is no fee to subscribe, and you may unsubscribe at any time using the link at the bottom of any email. Since the newsletter is free, there are no payments to refund.',
          ],
        },
        {
          heading: 'Future paid products or services',
          paragraphs: [
            'From time to time we may introduce optional paid offerings, such as a downloadable guide, a workshop, or a membership. If and when we do, the specific terms — including price and refund eligibility — will be clearly disclosed at the point of purchase before you pay. The terms below apply to any such future paid offerings unless stated otherwise at checkout.',
          ],
        },
        {
          heading: 'Refund eligibility for paid digital products',
          paragraphs: [
            'For any paid digital product, you may request a full refund within 14 days of purchase if you are not satisfied, provided the request is made in good faith. Because digital products are delivered immediately and cannot be returned, we reserve the right to decline refund requests that show evidence of abuse, such as full consumption or redistribution of the content.',
          ],
        },
        {
          heading: 'Refund eligibility for events or workshops',
          paragraphs: [
            'For any paid live event or workshop, you may cancel and receive a full refund up to 7 days before the scheduled date. Cancellations made within 7 days may be eligible for a credit toward a future event at our discretion. If we cancel an event, you will receive a full refund.',
          ],
        },
        {
          heading: 'How to request a refund',
          paragraphs: [
            `To request a refund for any eligible paid offering, email us at ${site.email} with your order details and the reason for your request. We will review and respond within five business days. Approved refunds are issued to the original payment method.`,
          ],
        },
        {
          heading: 'Processing times',
          paragraphs: [
            'Once a refund is approved, please allow 5 to 10 business days for the funds to appear on your statement, depending on your payment provider. We will notify you by email when your refund has been processed.',
          ],
        },
        {
          heading: 'Questions and disputes',
          paragraphs: [
            'We want every interaction with us to feel fair and friendly. If you have any question or concern about a charge or this policy, please contact us before initiating a dispute with your bank — we are confident we can resolve it together quickly and kindly.',
          ],
        },
      ]}
    />
  );
}
