//
//  ViewController.m
//  1111
//
//  Created by CR on 2018/9/4.
//  Copyright © 2018年 suning. All rights reserved.

#import "ViewController.h"

@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
   
    
    
    
    UIView *backView = [[UIView alloc] init];
    backView.frame = CGRectMake(40, 40, 100, 50);
    backView.backgroundColor = [UIColor redColor];
    [self.view addSubview:backView];

    CALayer *masLay = [[CALayer alloc] init];
    masLay.frame = backView.bounds;

    CAShapeLayer *leftLayer = [[CAShapeLayer alloc] init];
    leftLayer.frame = CGRectMake(0, 0, 50, 50);
    UIBezierPath *leftPath = [UIBezierPath bezierPathWithRoundedRect:leftLayer.bounds byRoundingCorners:UIRectCornerTopLeft | UIRectCornerBottomLeft cornerRadii:CGSizeMake(25, 25)];
    leftLayer.path = leftPath.CGPath;
    [masLay addSublayer:leftLayer];

    CAShapeLayer *rightLayer = [[CAShapeLayer alloc] init];
    rightLayer.frame = CGRectMake(50, 0, 50, 50);
    UIBezierPath *rightPath = [UIBezierPath bezierPathWithRoundedRect:rightLayer.bounds byRoundingCorners:UIRectCornerTopRight | UIRectCornerBottomRight cornerRadii:CGSizeMake(10, 10)];
    rightLayer.path = rightPath.CGPath;
    [masLay addSublayer:rightLayer];

    backView.layer.mask = masLay;
    
    UIButton *btn = [[UIButton alloc] initWithFrame:backView.bounds];
    btn.backgroundColor = [UIColor blueColor];
    [btn setTitle:@"111" forState:UIControlStateNormal];
    [backView addSubview:btn];
    
    [btn addTarget:self action:@selector(btnClick:) forControlEvents:UIControlEventTouchUpInside];
    
  
    
    
    
    
}

- (void)btnClick:(id)sender {
    NSLog(@"click");
}


- (void)didReceiveMemoryWarning {
    [super didReceiveMemoryWarning];
   
    
    
}


@end
