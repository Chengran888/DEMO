//
//  ViewController.m
//  buttonLongPress
//
//  Created by CR on 2018/8/23.
//  Copyright © 2018年 CR. All rights reserved.
//

#import "ViewController.h"

@interface ViewController ()

@property (nonatomic,strong) UIButton *button;

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.button = [UIButton buttonWithType:UIButtonTypeCustom];
    
    self.button.frame = CGRectMake(40, 50, 60, 60);
    self.button.backgroundColor = [UIColor redColor];
    [self.view addSubview:self.button];
    
    
    [self.button addTarget:self action:@selector(buttonAction:) forControlEvents:UIControlEventTouchUpInside];
    
    
    [self.button addGestureRecognizer:[[UILongPressGestureRecognizer alloc] initWithTarget:self action:@selector(longPress:)]];
    
    

    
}

- (void)buttonAction:(UIButton *)btn {
    NSLog(@"buttonAction-----");
}

- (void)longPress:(UIGestureRecognizer *)ges {
    NSLog(@"longPress-----=-");
}

@end
