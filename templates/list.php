<?php
/**
 * List template
 *
 * @package AffiliateCoupons\Templates
 *
 * @var Affcoups_Coupon $coupon
 */

// Exit if accessed directly
if( !defined( 'ABSPATH' ) ) exit;

// Check if coupons were found
if ( ! isset( $coupons ) )
    return;

?>
<div class="affcoups">

    <div class="affcoups-coupons-list">

        <?php foreach( $coupons as $coupon ) { ?>

            <div class="<?php $coupon->the_classes('affcoups-coupon' ); ?>"<?php $coupon->the_container(); ?>>

                <?php affcoups_tpl_the_coupon_discount( $coupon ); ?>

                <div class="affcoups-coupon__header">
                    <?php affcoups_tpl_the_coupon_image( $coupon ); ?>
                    <?php affcoups_tpl_the_coupon_types( $coupon ); ?>
                </div>

                <div class="affcoups-coupon__content">
                    <?php affcoups_tpl_the_coupon_title( $coupon ); ?>
                    <?php affcoups_tpl_the_coupon_description_with_excerpt( $coupon ); ?>
                </div>

                <div class="affcoups-coupon__footer">
                    <?php affcoups_tpl_the_coupon_code( $coupon ); ?>
                    <?php affcoups_tpl_the_coupon_button( $coupon ); ?>
                    <?php affcoups_tpl_the_coupon_valid_dates( $coupon ); ?>
                </div>

            </div>

        <?php } ?>

    </div>

    <?php do_action( 'affcoups_template_end', $coupons ); ?>

</div>