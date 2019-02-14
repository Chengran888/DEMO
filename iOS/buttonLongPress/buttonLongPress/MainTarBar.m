//
//  MainTarBar.m
//  buttonLongPress
//
//  Created by CR on 2018/8/23.
//  Copyright © 2018年 CR. All rights reserved.
//

#import "MainTarBar.h"
#import "ShareObject.h"


@interface MainTarBar ()<UITabBarControllerDelegate,UIGestureRecognizerDelegate,UITabBarDelegate>


@property (nonatomic,assign) NSTimeInterval timeIn;

@end

@implementation MainTarBar

- (void)viewDidLoad {
    [super viewDidLoad];
    
    self.delegate = self;
    
//    self.tabBar.delegate = self;
    
//    UILongPressGestureRecognizer *longGes = [[UILongPressGestureRecognizer alloc] initWithTarget:self action:@selector(longPress:)];
//    UITapGestureRecognizer *tap = [[UITapGestureRecognizer alloc] initWithTarget:self action:@selector(longPress:)];
//    [self.tabBar addGestureRecognizer:tap];
    

    
}


- (void)viewDidAppear:(BOOL)animated {
    [super viewDidAppear:animated];
    
    
    for (UIView *subView in self.tabBar.subviews) {
        
        if ([subView isKindOfClass:NSClassFromString(@"UITabBarButton")]) {

            
            [((UIControl *)subView) addTarget:self action:@selector(touchDown:) forControlEvents:UIControlEventTouchDown];
            [((UIControl *)subView) addTarget:self action:@selector(touchCancel:) forControlEvents:UIControlEventTouchCancel];
            [((UIControl *)subView) addTarget:self action:@selector(touchUpIn:) forControlEvents:UIControlEventTouchUpInside];
            [((UIControl *)subView) addTarget:self action:@selector(touchupOut:) forControlEvents:UIControlEventTouchUpOutside];
            
            
//            UILongPressGestureRecognizer *tapges = [[UILongPressGestureRecognizer alloc] initWithTarget:self action:@selector(longPress:)];
//            [subView addGestureRecognizer:tapges];
            

        }
        
    }
    
}

- (void)touchupOut:(id)sub {
    NSLog(@"+++++++touchupOut");
}

- (void)touchUpIn:(id)sub {
    NSLog(@"+++++++touchUpIn");
    
    
    
    NSTimeInterval timeD = [[NSDate date] timeIntervalSince1970] - self.timeIn;
    
    if (timeD > 1) {
        NSLog(@"0000999长按");
    } else {
        NSLog(@"0000999短按");
        
        NSDictionary *dic = [[ShareObject shareObject].mdic objectForKey:@"buttonDown"];
        NSString *sel = [dic objectForKey:@"action"];
        id target = [dic objectForKey:@"target"];
        id sender = [dic objectForKey:@"sender"];
        id event = [dic objectForKey:@"event"];
        [[UIApplication sharedApplication] sendAction: NSSelectorFromString([NSString stringWithFormat:@"%@+++++",sel]) to:target from:sender forEvent:event];
        
        
        
        NSDictionary *dicUp = [[ShareObject shareObject].mdic objectForKey:@"buttonUp"];
        NSString *selUp = [dicUp objectForKey:@"action"];
        id targetUp = [dicUp objectForKey:@"target"];
        id senderUp = [dicUp objectForKey:@"sender"];
        id eventUp = [dicUp objectForKey:@"event"];
        [[UIApplication sharedApplication] sendAction: NSSelectorFromString([NSString stringWithFormat:@"%@+++++",selUp]) to:targetUp from:senderUp forEvent:eventUp];
    }
    
    
    
  
    
}

- (void)touchDown:(id)sub {
    NSLog(@"+++++touchDown");

    self.timeIn = [[NSDate date] timeIntervalSince1970];
    
}

- (void)touchCancel:(id)sub {
    
    NSLog(@"+++++touchCancel");
    
}

//
//- (void)tabBar:(UITabBar *)tabBar didSelectItem:(UITabBarItem *)item {
//    NSLog(@"didSelectItem");
//}


- (void)tabBarController:(UITabBarController *)tabBarController didSelectViewController:(UIViewController *)viewController {
    NSLog(@"didSelectViewController ---");
}

//- (void)longPress:(UIGestureRecognizer *)gets {
//    NSLog(@"longPress ----");
//}



@end
